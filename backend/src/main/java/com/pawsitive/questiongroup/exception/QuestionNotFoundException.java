package com.pawsitive.questiongroup.exception;

public class QuestionNotFoundException extends RuntimeException {
    public static final String MESSAGE = "질문이 존재하지 않습니다.";

    public QuestionNotFoundException() {
        super(MESSAGE);
    }
}
