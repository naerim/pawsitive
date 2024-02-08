package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.ChatRoomCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.entity.ChatRoom;
import java.util.List;
import org.springframework.security.core.Authentication;

public interface ChatRoomService {
    ChatRoomRes createChatRoom(ChatRoomCreateReq req, Authentication authentication);

    ChatRoom getChatRoomEntityByChatRoomNo(int chatRoomNo);

    List<ChatRes> getChatHistoryByChatRoomNo(String chatRoomNo);

    List<ChatRoom> getChatRooms(int userNo);
}
