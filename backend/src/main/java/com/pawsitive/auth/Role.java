package com.pawsitive.auth;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * 회원의 권한을 관리할 Enum 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Getter
@RequiredArgsConstructor
public enum Role {

    GUEST("ROLE_GUEST", "GUEST"),
    USER("ROLE_USER", "USER"),
    SHELTER("ROLE_SHELTER", "SHELTER");

    private final String key;
    private final String title;

}
