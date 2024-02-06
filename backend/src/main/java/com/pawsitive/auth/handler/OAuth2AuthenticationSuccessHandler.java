package com.pawsitive.auth.handler;

import static com.pawsitive.auth.HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME;

import com.pawsitive.auth.HttpCookieOAuth2AuthorizationRequestRepository;
import com.pawsitive.auth.OAuth2Provider;
import com.pawsitive.auth.OAuth2UserPrincipal;
import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.auth.jwt.JwtTokenProvider;
import com.pawsitive.auth.unlink.OAuth2UserUnlinkManager;
import com.pawsitive.common.util.CookieUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * OAuth2 인증 성긍 시 호출되는 핸들러입니다.
 *
 * @author 천세진, 이하늬
 * @since 1.0
 */
@RequiredArgsConstructor
@Component
@Slf4j
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final HttpCookieOAuth2AuthorizationRequestRepository
        httpCookieOAuth2AuthorizationRequestRepository;
    private final OAuth2UserUnlinkManager oAuth2UserUnlinkManager;
    private final JwtTokenProvider jwtTokenProvider;

    /**
     * 인증 성공 시 처리할 로직을 정의한 메서드입니다.
     *
     * @param request        요청 객체
     * @param response       응답 객체
     * @param authentication 인증 객체
     */
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {

        String targetUrl;

        targetUrl = determineTargetUrl(request, response, authentication);

        if (response.isCommitted()) {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }

        clearAuthenticationAttributes(request, response);
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }

    @Override
    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) {

        Optional<String> redirectUri =
            CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(Cookie::getValue);

        String targetUrl = redirectUri.orElse(getDefaultTargetUrl());

//        String mode = CookieUtils.getCookie(request, MODE_PARAM_COOKIE_NAME)
//            .map(Cookie::getValue)
//            .orElse("");
        // TODO 프론트에서 넘어올 때 쿠키에 mode 실어서 보내주게 된다면 하단 코드 삭제
        String mode = "login";

        OAuth2UserPrincipal principal = getOAuth2UserPrincipal(authentication);

        if (principal == null) {
            return UriComponentsBuilder.fromUriString(targetUrl)
                .queryParam("error", "Login failed")
                .build().toUriString();
        }

        if ("login".equalsIgnoreCase(mode)) {
            // TODO: DB 저장
            // TODO: 액세스 토큰, 리프레시 토큰 발급
            // TODO: 리프레시 토큰 DB 저장
//            log.info("email={}, name={}, nickname={}, accessToken={}",
//                principal.getUserInfo().getEmail(),
//                principal.getUserInfo().getName(),
//                principal.getUserInfo().getNickname(),
//                principal.getUserInfo().getAccessToken()
//            );

            // TODO 토큰 발급 로직 생성
            JwtToken jwtToken = jwtTokenProvider.generateToken(authentication);

            return UriComponentsBuilder.fromUriString(targetUrl)
                .queryParam("access_token", jwtToken.getAccessToken())
                .queryParam("refresh_token", jwtToken.getRefreshToken())
                .build().toUriString();

        } else if ("unlink".equalsIgnoreCase(mode)) {

            String accessToken = principal.getUserInfo().getAccessToken();
            OAuth2Provider provider = principal.getUserInfo().getProvider();

            // TODO: DB 삭제
            // TODO: 리프레시 토큰 삭제
            oAuth2UserUnlinkManager.unlink(provider, accessToken);

            return UriComponentsBuilder.fromUriString(targetUrl)
                .build().toUriString();
        }

        return UriComponentsBuilder.fromUriString(targetUrl)
            .queryParam("error", "Login failed")
            .build().toUriString();
    }

    private OAuth2UserPrincipal getOAuth2UserPrincipal(Authentication authentication) {
        Object principal = authentication.getPrincipal();

        if (principal instanceof OAuth2UserPrincipal) {
            return (OAuth2UserPrincipal) principal;
        }
        return null;
    }

    protected void clearAuthenticationAttributes(HttpServletRequest request,
                                                 HttpServletResponse response) {
        super.clearAuthenticationAttributes(request);
        httpCookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequestCookies(request,
            response);
    }
}