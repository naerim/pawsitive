package com.pawsitive.chatgroup.controller;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.service.ChatService;
import java.security.Principal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.MessageDeliveryException;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;
import org.springframework.web.socket.messaging.SessionUnsubscribeEvent;

//@Tag(name = "07.Chat")
//@RestController
@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final ChatService chatService;
    private final SimpMessageSendingOperations template;
    private static final String DESTINATION = "/sub/rooms/";

    @MessageMapping("/chat/enter") // 입장 경로: "/pub/chat/enter"
    public void enterChatRoom(@Payload ChatCreateReq chatReq, Principal principal) {
        log.info("chatReq: {}, enter user: {}", chatReq.toString(), principal.getName());
        String msg = principal.getName() + "님이 채팅을 시작하였습니다.";
        template.convertAndSend(DESTINATION + chatReq.getChatRoomNo(), msg);
    }

    @MessageMapping("/chat") // 메시지 보내는 경로: "/pub/chat"
    public void sentChat(@Payload ChatCreateReq chatReq) {
        log.info("chatReq: {}", chatReq.toString());
        chatService.createChat(chatReq);
        template.convertAndSend(DESTINATION + chatReq.getChatRoomNo(), chatReq);
    }

    @EventListener
    public void handleSessionConnected(SessionConnectedEvent event) {
        String simpSessionId = (String) event.getMessage().getHeaders().get("simpSessionId");

        if (event.getUser() != null) {
            Principal user = event.getUser();
            if (user != null) {
                try {
                    String username = user.getName();
                } catch (Exception e) {
                    throw new MessageDeliveryException("인증 정보가 올바르지 않습니다. 다시 로그인 후 이용해주세요.");
                }
            }
        }
    }

    @EventListener
    public void handleSessionSubscribe(SessionSubscribeEvent event) {
        String destination = (String) event.getMessage().getHeaders().get("simpDestination");
        assert destination != null;
        if (destination.equals(DESTINATION)) {
            String msg = event.getUser().getName() + "님이 채팅방에 입장하였습니다.";
            template.convertAndSend(DESTINATION, msg);
        }
    }

    @EventListener
    public void handleSessionSubscribe(SessionUnsubscribeEvent event) {
        String destination = (String) event.getMessage().getHeaders().get("simpDestination");
        assert destination != null;
        if (destination.equals(DESTINATION)) {
            String msg = event.getUser().getName() + "님이 채팅방에서 퇴장하였습니다.";
            template.convertAndSend(DESTINATION, msg);
        }
    }

}

