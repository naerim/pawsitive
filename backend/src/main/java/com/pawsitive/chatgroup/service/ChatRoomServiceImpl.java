package com.pawsitive.chatgroup.service;


import com.pawsitive.chatgroup.dto.request.ChatRoomCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.entity.ChatRoom;
import com.pawsitive.chatgroup.exception.ChatRoomNotFoundException;
import com.pawsitive.chatgroup.repository.ChatRoomRepository;
import com.pawsitive.chatgroup.transfer.ChatGroupTransfer;
import com.pawsitive.common.exception.InvalidRequestException;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.service.DogService;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatRoomServiceImpl implements ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;
    private final DogService dogService;

    /**
     * 채팅방을 생성
     *
     * @return 생성한 채팅방
     */
    @Override
    public ChatRoomRes createChatRoom(ChatRoomCreateReq req, Authentication authentication) {
        ChatRoom room = new ChatRoom();
        String authority = authentication.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));

        // 개인회원이 아닌 사람이 채팅방 생성 요청 시 잘못된 요청
        if (!"USER".equals(authority)) {
            throw new InvalidRequestException();
        }

        Dog dog = dogService.getDogEntityByDogNo(req.getDogNo());

        room.setChatRoomNo(getRandomRoomNo());
        room.setName(dog.getUser().getName() + "보호소 - " + dog.getName());
        room.setDogNo(req.getDogNo());
        chatRoomRepository.save(room);
        ChatRoom chatRoom = getChatRoomEntityByChatRoomNo(room.getChatRoomNo());
        return ChatGroupTransfer.entityToDto(chatRoom);
    }

    private String getRandomRoomNo() {
        String roomNo = UUID.randomUUID().toString();
        roomNo = roomNo.replace("-", "");
        roomNo = roomNo.substring(0, 16);
        return roomNo;
    }

    @Override
    public ChatRoom getChatRoomEntityByChatRoomNo(String chatRoomNo) {
        return chatRoomRepository.findByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);
    }

    /**
     * 채팅방 고유번호로 채팅 이력을 조회
     *
     * @param chatRoomNo 조회할 채팅방의 고유 번호
     * @return
     */
    @Override
    public List<ChatRes> getChatHistoryByChatRoomNo(String chatRoomNo) {
        return chatRoomRepository.getChatHistoryByChatRoomNo(chatRoomNo);
    }

    /**
     * 최근에 생성된 순으로 채팅방 전체 조회
     *
     * @return 최근에 생성된 순으로 조회한 채팅방 목록
     */
    @Override
    public List<ChatRoom> getChatRooms(int userNo) {
        return chatRoomRepository.getChatRoomsByOrderByCreatedAtDesc(userNo);
    }

}
