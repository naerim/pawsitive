package com.pawsitive.chatgroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ChatCreateReq {

    private String chatRoomNo;
    private int userNo;
    private String message;

}