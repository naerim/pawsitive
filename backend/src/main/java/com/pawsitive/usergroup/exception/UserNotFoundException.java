package com.pawsitive.usergroup.exception;

public class UserNotFoundException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 계정입니다.";

    public UserNotFoundException() {
        super(MESSAGE);
    }
}
