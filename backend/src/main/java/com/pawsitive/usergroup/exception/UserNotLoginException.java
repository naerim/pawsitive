package com.pawsitive.usergroup.exception;

public class UserNotLoginException extends RuntimeException {
    public static final String MESSAGE = "로그인한 사용자입니다.";

    public UserNotLoginException() {
        super(MESSAGE);
    }
}
