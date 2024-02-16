package com.pawsitive.auth;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * OAuth2 제공자를 선언해 놓은 ENUM 입니다.
 */
@Getter
@RequiredArgsConstructor
public enum OAuth2Provider {
    GOOGLE("google"),
    FACEBOOK("facebook"),
    GITHUB("github"),
    NAVER("naver"),
    KAKAO("kakao");

    private final String registrationId;
}
