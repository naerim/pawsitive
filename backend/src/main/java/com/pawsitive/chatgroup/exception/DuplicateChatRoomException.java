package com.pawsitive.chatgroup.exception;

public class DuplicateChatRoomException extends RuntimeException {
    public static final String MESSAGE = "해당 유기견에 대한 채팅방이 이미 존재합니다.";

    public DuplicateChatRoomException() {
        super(MESSAGE);
    }
}
