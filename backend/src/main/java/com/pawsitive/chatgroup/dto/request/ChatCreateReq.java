package com.pawsitive.chatgroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Setter
public class ChatCreateReq {

    private String chatRoomNo;
    private int senderNo;
    private String message;

}