package com.pawsitive.chatgroup.repository;

import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomListRes;
import com.pawsitive.chatgroup.dto.response.LastChatTmp;
import java.util.List;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ChatRoomRepositoryCustom {
    List<ChatRoomListRes> getChatRoomListByUserNo(int userNo);

    List<ChatRoomListRes> getChatRoomListByDogNo(int dogNo);

    List<ChatRes> getChatHistoryByChatRoomNo(int roomNo);

    boolean isDuplicateChatRoom(int userNo, int dogNo);

    LastChatTmp getLastChat(int chatRoomNo);
}
