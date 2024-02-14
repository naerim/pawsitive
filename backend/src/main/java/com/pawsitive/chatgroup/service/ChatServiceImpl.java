package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.entity.Chat;
import com.pawsitive.chatgroup.repository.ChatRepository;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
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
    @Transactional
    public ChatRes createChat(ChatCreateReq chatReq) {
        User user = userService.getUserByUserNo(chatReq.getSenderNo());
        Chat chat = new Chat();
        chat.setRoom(chatRoomService.getChatRoomEntityByChatRoomNo(chatReq.getChatRoomNo()));
        chat.setUser(user);
        chat.setMessage(chatReq.getMessage());
        chat.setType(chatReq.getType());
        Chat savedChat = chatRepository.save(chat);

        ChatRes chatRes = new ChatRes();
        chatRes.setChatNo(savedChat.getChatNo());
        chatRes.setUserNo(chatReq.getSenderNo());
        chatRes.setUserName(user.getName());
        chatRes.setUserImage(user.getImage());
        chatRes.setType(chatReq.getType());
        chatRes.setMessage(chatReq.getMessage());
        chatRes.setCreatedAt(savedChat.getCreatedAt());
        chatRes.setIsRead(savedChat.getIsRead());

        return chatRes;
    }

}
