package com.pawsitive.chatgroup.exception;

public class ChatRoomNotFoundException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 채팅방입니다.";

    public ChatRoomNotFoundException() {
        super(MESSAGE);
    }
}
