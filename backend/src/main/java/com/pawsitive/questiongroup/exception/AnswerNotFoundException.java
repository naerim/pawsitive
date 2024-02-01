package com.pawsitive.questiongroup.exception;

public class AnswerNotFoundException extends RuntimeException {
    public static final String MESSAGE = "답변이 존재하지 않습니다.";

    public AnswerNotFoundException() {
        super(MESSAGE);
    }
}
