package com.pawsitive.auth.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * JWT 토큰 정보를 저장할 클래스입니다.
 */
@Builder
@Getter
@Setter
@AllArgsConstructor
public class JwtToken {

    private String grantType;
    private String accessToken;
    private String refreshToken;

}
