package com.pawsitive.auth.info;

import com.pawsitive.auth.OAuth2Provider;
import com.pawsitive.auth.exception.OAuth2AuthenticationProcessingException;
import java.util.Map;

/**
 * 플랫폼에 맞는 OAuth2 유저 정보를 만들어주는 클래스입니다.
 */
public class OAuth2UserInfoFactory {

    /**
     * 플랫폼에 따른 유저 정보 객체를 담아 반환하는 메서드입니다.
     *
     * @param registrationId 등록 ID
     * @param accessToken    액세스 토큰
     * @param attributes     요소 값들
     * @return 각 플랫폼에 해당하는 유저정보 객체
     */
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
