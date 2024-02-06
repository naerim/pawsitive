package com.pawsitive.chatgroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ChatRoomCreateReq {
    private int dogNo;
    private int userNo;
}