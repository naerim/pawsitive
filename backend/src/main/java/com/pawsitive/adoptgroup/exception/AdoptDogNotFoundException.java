package com.pawsitive.adoptgroup.exception;

public class AdoptDogNotFoundException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 반려견입니다.";

    public AdoptDogNotFoundException() {
        super(MESSAGE);
    }
}
