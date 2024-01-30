package com.pawsitive.doggroup.exception;

public class DogNotSavedException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 유기견입니다.";

    public DogNotSavedException() {
        super(MESSAGE);
    }
}
