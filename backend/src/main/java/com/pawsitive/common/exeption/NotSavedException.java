package com.pawsitive.common.exeption;

public class NotSavedException extends RuntimeException {
    public static final String MESSAGE = "정상적으로 등록되지 않았습니다.";

    public NotSavedException() {
        super(MESSAGE);
    }
}
