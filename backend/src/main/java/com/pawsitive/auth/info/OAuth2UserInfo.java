package com.pawsitive.auth.info;

import com.pawsitive.auth.OAuth2Provider;
import java.util.Map;

/**
 * OAuth2 인증을 통한 유저 정보 인터페이스입니다.
 */
public interface OAuth2UserInfo {

    OAuth2Provider getProvider();

    String getAccessToken();

    Map<String, Object> getAttributes();

    String getId();

    String getEmail();

    String getName();

    String getFirstName();

    String getLastName();

    String getNickname();

    String getProfileImageUrl();
}
