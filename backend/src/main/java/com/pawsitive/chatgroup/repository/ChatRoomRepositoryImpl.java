package com.pawsitive.chatgroup.repository;

import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.entity.Chat;
import com.pawsitive.chatgroup.entity.ChatRoom;
import com.pawsitive.chatgroup.entity.QChat;
import com.pawsitive.chatgroup.entity.QChatRoom;
import com.pawsitive.usergroup.entity.QUser;
import com.querydsl.core.types.Projections;
import java.util.List;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class ChatRoomRepositoryImpl extends QuerydslRepositorySupport
    implements ChatRoomRepositoryCustom {

    private static final QChatRoom qChatRoom = QChatRoom.chatRoom;
    private static final QChat qChat = QChat.chat;
    private static final QUser qUser = QUser.user;

    public ChatRoomRepositoryImpl() {
        super(Chat.class);
    }

    @Override
    public List<ChatRoom> getChatRoomsByOrderByCreatedAtDesc(int userNo) {
        return from(qChatRoom)
            .where(qChatRoom.userNo.eq(userNo))
            .orderBy(qChatRoom.createdAt.desc())
            .fetch();
    }

    @Override
    public List<ChatRes> getChatHistoryByChatRoomNo(int roomNo) {
        return from(qChat)
            .innerJoin(qChat.room, qChatRoom)
            .innerJoin(qChat.user, qUser)
            .select(Projections.constructor(ChatRes.class, qChat.chatNo, qUser.userNo, qUser.name,
                qUser.image, qChat.message, qChat.createdAt, qChat.isRead))
            .where(qChatRoom.chatRoomNo.eq(roomNo))
            .orderBy(qChat.createdAt.desc())
            .fetch();
    }

    @Override
    public boolean isDuplicateChatRoom(int userNo, int dogNo) {
        Long cnt = from(qChatRoom)
            .select(qChatRoom.chatRoomNo.count())
            .where(qChatRoom.userNo.eq(userNo))
            .where(qChatRoom.dogNo.eq(dogNo))
            .fetchOne();

        return cnt > 0;
    }
}
