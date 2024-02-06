package com.pawsitive.auth.handler;


import static com.pawsitive.auth.HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME;

import com.pawsitive.auth.HttpCookieOAuth2AuthorizationRequestRepository;
import com.pawsitive.common.util.CookieUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * OAuth2 인증 실패 시 호출되는 핸들러입니다.
 *
 * @author 천세진, 이하늬
 * @since 1.0
 */
@RequiredArgsConstructor
@Component
public class OAuth2AuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    private final HttpCookieOAuth2AuthorizationRequestRepository
        httpCookieOAuth2AuthorizationRequestRepository;

    /**
     * 인증 실패 시 처리할 로직을 정의한 메서드입니다.
     *
     * @param request   요청 객체
     * @param response  응답 객체
     * @param exception 예외 객체
     */
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {
        String targetUrl =
            CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME).map(Cookie::getValue)
                .orElse(("/api/v1/auth/no-auth"));

        targetUrl = UriComponentsBuilder
            .fromUriString(targetUrl)
            .queryParam("error", exception.getLocalizedMessage())
            .build().toUriString();

        httpCookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequestCookies(request,
            response);

        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }
}
