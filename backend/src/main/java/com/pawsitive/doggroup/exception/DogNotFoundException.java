package com.pawsitive.doggroup.exception;

public class DogNotFoundException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 유기견입니다.";

    public DogNotFoundException() {
        super(MESSAGE);
    }
}
