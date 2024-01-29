package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.entity.ChatRoom;
import java.util.List;

public interface ChatRoomService {
    ChatRoom createChatRoom();

    ChatRoom getChatRoomByChatRoomNo(String chatRoomNo);

    List<ChatRoom> getChatRooms();
}
