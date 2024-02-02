package com.pawsitive.chatgroup.service;


import com.pawsitive.chatgroup.entity.ChatRoom;
import com.pawsitive.chatgroup.exception.ChatRoomNotFoundException;
import com.pawsitive.chatgroup.repository.ChatRoomRepository;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatRoomServiceImpl implements ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;

    /**
     * 채팅방을 생성
     *
     * @return 생성한 채팅방
     */
    @Override
    public ChatRoom createChatRoom() {
        ChatRoom room = new ChatRoom();
        String roomNo = UUID.randomUUID().toString();
        roomNo = roomNo.replace("-", "");
        roomNo = roomNo.substring(0, 16);
        room.setChatRoomNo(roomNo);
        room.setName("채팅방" + roomNo);
        return chatRoomRepository.save(room);
    }

    /**
     * 채팅방 고유번호로 채팅방을 상세 조회
     *
     * @param chatRoomNo 조회할 채팅방의 고유 번호
     * @return
     */
    @Override
    public ChatRoom getChatRoomByChatRoomNo(String chatRoomNo) {
        return chatRoomRepository.findByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);
    }

    /**
     * 최근에 생성된 순으로 채팅방 전체 조회
     *
     * @return 최근에 생성된 순으로 조회한 채팅방 목록
     */
    @Override
    public List<ChatRoom> getChatRooms() {
        return chatRoomRepository.findChatRoomsByOrderByCreatedAtDesc();
    }

}
