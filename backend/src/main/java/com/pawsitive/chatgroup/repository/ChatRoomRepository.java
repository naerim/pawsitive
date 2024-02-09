package com.pawsitive.chatgroup.repository;

import com.pawsitive.chatgroup.entity.ChatRoom;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRoomRepository
    extends JpaRepository<ChatRoom, String>, ChatRoomRepositoryCustom {

    Optional<ChatRoom> findByChatRoomNo(int chatRoomNo);

    Optional<ChatRoom> findChatRoomByUserNoAndDogNo(int userNo, int dogNo);

}
