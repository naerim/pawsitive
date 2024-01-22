package com.pawsitive.auth.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * OAuth2 인증 관련 실패 시 터뜨릴 커스텀 예외 클래스입니다.
 *
 * @author 이하늬
 */
public class OAuth2AuthenticationProcessingException extends AuthenticationException {
    public OAuth2AuthenticationProcessingException(String msg) {
        super(msg);
    }
}
