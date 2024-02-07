package com.pawsitive.surveygroup.exception;

public class InvalidSurveyValueException extends RuntimeException {

    private static final String MESSAGE = "올바르지 않은 설문 값입니다.";

    public InvalidSurveyValueException() {
        super(MESSAGE);
    }

}
