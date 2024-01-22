package com.pawsitive.user.exception;

public class InvalidPasswordException extends RuntimeException {
    public static final String MESSAGE = "잘못된 비밀번호입니다.";

    public InvalidPasswordException() {
        super(MESSAGE);
    }
}
