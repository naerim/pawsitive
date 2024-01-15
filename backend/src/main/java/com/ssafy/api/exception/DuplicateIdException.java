package com.ssafy.api.exception;

public class DuplicateIdException extends RuntimeException {
  public static final String MESSAGE = "이미 존재하는 사용자 ID 입니다.";

  public DuplicateIdException() {
    super(MESSAGE);
  }
}
