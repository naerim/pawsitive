package com.pawsitive.auth.exception;

/**
 * Jwt 인증 간 사용할 사용자 정의 예외 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public class MailNotSendException extends RuntimeException {

    private static final String MESSAGE = "메일이 정상적으로 전송되지 않았습니다.";

    public MailNotSendException() {
        super(MESSAGE);
    }

}
