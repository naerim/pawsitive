package com.pawsitive.contentgroup.exception;

public class ContentNotFoundException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 컨텐츠입니다.";

    public ContentNotFoundException() {
        super(MESSAGE);
    }
}
