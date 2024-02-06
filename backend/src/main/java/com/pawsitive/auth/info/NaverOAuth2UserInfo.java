package com.pawsitive.auth.info;

import com.pawsitive.auth.OAuth2Provider;
import java.util.Map;

/**
 * Kakao 기반 OAuth2 유저 정보 클래스입니다.
 */
public class NaverOAuth2UserInfo implements OAuth2UserInfo {

    private final Map<String, Object> attributes;
    private final String accessToken;
    private final String id;
    private final String email;
    private final String name;

    /**
     * NaverOAuth2UserInfo 생성자 입니다.
     *
     * @param accessToken 액세스 토큰
     * @param attributes  받아올 값
     */
    public NaverOAuth2UserInfo(String accessToken, Map<String, Object> attributes) {
        this.accessToken = accessToken;
        // attributes 맵의 response 키의 값에 실제 attributes 맵이 할당되어 있음
        this.attributes = (Map<String, Object>) attributes.get("response");
        this.id = (String) this.attributes.get("id");
        this.email = (String) this.attributes.get("email");
        this.name = (String) this.attributes.get("name");
    }

    @Override
    public OAuth2Provider getProvider() {
        return OAuth2Provider.NAVER;
    }

    @Override
    public String getAccessToken() {
        return accessToken;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public String getName() {
        return name;
    }
    
}
