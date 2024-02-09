package com.pawsitive.chatgroup.repository;

import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomListRes;
import java.util.List;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ChatRoomRepositoryCustom {
    List<ChatRoomListRes> getChatRoomList(int userNo);

    List<ChatRes> getChatHistoryByChatRoomNo(int roomNo);

    boolean isDuplicateChatRoom(int userNo, int dogNo);

    ChatRoomListRes.LastChat getLastChat(int chatRoomNo);
}
