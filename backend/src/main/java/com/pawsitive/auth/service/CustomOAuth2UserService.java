package com.pawsitive.auth.service;

import com.pawsitive.auth.OAuth2UserPrincipal;
import com.pawsitive.auth.exception.OAuth2AuthenticationProcessingException;
import com.pawsitive.auth.info.OAuth2UserInfo;
import com.pawsitive.auth.info.OAuth2UserInfoFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * OAuth2 기반 인증 로직을 처리하는 서비스 클래스입니다.
 */
@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    /**
     * 요청에 따른 유저 정보를 불러옵니다.
     *
     * @param oAuth2UserRequest OAuth2기반 요청 객체
     * @return 유저 정보 객체
     */
    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest)
        throws OAuth2AuthenticationException {
        OAuth2User oAuth2User =
            super.loadUser(oAuth2UserRequest); // 상위 클래스에 정의된 액세스 토큰으로 사용자 정보를 가져오는 로직을 실행
        try {
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            // TODO exception 처리
            // Throwing an instance of AuthenticationException will trigger the OAuth2AuthenticationFailureHandler
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    /**
     * 각 OAuth2 제공자 별 제공되는 사용자 정보를 동일한 인터페이스로 변환하여 리턴합니다.
     *
     * @param userRequest OAuth2 기반 요청 객체
     * @param oAuth2User  유저 정보 객체
     * @return 유저 Principal
     */
    private OAuth2User processOAuth2User(OAuth2UserRequest userRequest, OAuth2User oAuth2User) {
        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        String userNameAttributeName =
            userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint()
                .getUserNameAttributeName();
        String accessToken = userRequest.getAccessToken().getTokenValue();


        OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(registrationId,
            accessToken, oAuth2User.getAttributes());


        if (!StringUtils.hasText(oAuth2UserInfo.getEmail())) {
            throw new OAuth2AuthenticationProcessingException(
                "Email not found from OAuth2 provider");
        }

//        User user = userService.getUserByUserId(oAuth2UserInfo.getEmail());


        return new OAuth2UserPrincipal(oAuth2UserInfo);
    }
}
