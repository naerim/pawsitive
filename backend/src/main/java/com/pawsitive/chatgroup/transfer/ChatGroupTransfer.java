package com.pawsitive.chatgroup.transfer;

import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.entity.ChatRoom;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ChatGroupTransfer {
    public static ChatRoomRes entityToDto(ChatRoom chatRoom) {
        ChatRoomRes res = new ChatRoomRes();
        res.setName(chatRoom.getName());
        res.setChatRoomNo(chatRoom.getChatRoomNo());
        res.setId(chatRoom.getId());
        res.setDogNo(chatRoom.getDogNo());
        res.setCreatedAt(chatRoom.getCreatedAt());
        res.setPromiseCreatedAt(chatRoom.getPromiseCreatedAt());
        res.setIsPromiseAccepted(chatRoom.getIsPromiseAccepted());
        return res;
    }
}
