package com.pawsitive.usergroup.exception;

public class SurveyNotFoundException extends RuntimeException {
    public static final String MESSAGE = "설문이 존재하지 않습니다.";

    public SurveyNotFoundException() {
        super(MESSAGE);
    }
}
