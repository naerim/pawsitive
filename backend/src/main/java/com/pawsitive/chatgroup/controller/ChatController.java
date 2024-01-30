package com.pawsitive.chatgroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.entity.Chat;
import com.pawsitive.chatgroup.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

//@Tag(name = "07.Chat")
@RestController
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;

    @MessageMapping("/chat") // 메시지 보내는 경로: "/pub/chat"
    @SendTo("/sub/rooms/{chatRoomNo}") // 메시지 수신자 (목적지)
    public ResponseEntity<Chat> chat(@DestinationVariable Long chatRoomNo, ChatCreateReq chatReq) {
        return ResponseEntity
            .status(OK)
            .body(chatService.createChat(chatReq));

    }
}
