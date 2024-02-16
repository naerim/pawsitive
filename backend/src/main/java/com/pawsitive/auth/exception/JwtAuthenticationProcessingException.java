package com.pawsitive.auth.exception;

/**
 * Jwt 인증 간 사용할 사용자 정의 예외 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public class JwtAuthenticationProcessingException extends RuntimeException {

    public JwtAuthenticationProcessingException(String msg) {
        super(msg);
    }
}
