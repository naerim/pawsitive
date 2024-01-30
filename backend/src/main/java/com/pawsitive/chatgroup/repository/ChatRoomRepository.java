package com.pawsitive.chatgroup.repository;

import com.pawsitive.chatgroup.entity.ChatRoom;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, String> {
    Optional<ChatRoom> findByChatRoomNo(String chatRoomNo);

    List<ChatRoom> findChatRoomsByOrderByCreatedAtDesc();
}
