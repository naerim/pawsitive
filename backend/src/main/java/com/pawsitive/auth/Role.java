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

    GUEST("ROLE_GUEST", "손님"),
    USER("ROLE_USER", "사용자"),
    SHELTER("ROLE_SHELTER", "보호소");

    private final String key;
    private final String title;

}
