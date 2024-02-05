package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.entity.Chat;
import com.pawsitive.chatgroup.repository.ChatRepository;
import com.pawsitive.usergroup.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {
    private final ChatRepository chatRepository;
    private final ChatRoomService chatRoomService;
    private final UserService userService;

    /**
     * 채팅을 저장한다.
     *
     * @return 생성한 채팅방
     */
    @Override
    public Chat createChat(ChatCreateReq chatReq) {
        Chat chat = new Chat();
        chat.setRoom(chatRoomService.getChatRoomEntityByChatRoomNo(chatReq.getChatRoomNo()));
        chat.setUser(userService.getUserByUserNo(chatReq.getUserNo()));
        chat.setMessage(chatReq.getMessage());
        return chatRepository.save(chat);
    }
}
