package com.pawsitive.chatgroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.entity.Chat;
import com.pawsitive.chatgroup.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.web.bind.annotation.RestController;

//@Tag(name = "07.Chat")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final ChatService chatService;

    @MessageMapping("/chat") // 메시지 보내는 경로: "/pub/chat"
    @SendToUser("/sub/rooms/{chatRoomNo}") // 메시지 수신자 (목적지)
    public ResponseEntity<Chat> chat(
        @Payload ChatCreateReq chatReq) {
        log.info("chatReq: {}", chatReq.toString());

        return ResponseEntity
            .status(OK)
            .body(chatService.createChat(chatReq));

    }
}
