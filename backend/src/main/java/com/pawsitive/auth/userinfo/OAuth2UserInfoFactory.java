package com.pawsitive.auth.userinfo;

import com.pawsitive.auth.OAuth2Provider;
import com.pawsitive.auth.exception.OAuth2AuthenticationProcessingException;
import java.util.Map;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, String accessToken,
                                                   Map<String, Object> attributes) {
        if (OAuth2Provider.GOOGLE.getRegistrationId().equals(registrationId)) {
            return new GoogleOAuth2UserInfo(accessToken, attributes);
        } else if (OAuth2Provider.NAVER.getRegistrationId().equals(registrationId)) {
            return new NaverOAuth2UserInfo(accessToken, attributes);
        } else if (OAuth2Provider.KAKAO.getRegistrationId().equals(registrationId)) {
            return new KakaoOAuth2UserInfo(accessToken, attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException(
                String.format("Login with %s is not supported", registrationId));
        }
    }
}
