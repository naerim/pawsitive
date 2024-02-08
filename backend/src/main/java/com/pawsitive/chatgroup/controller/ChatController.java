package com.pawsitive.chatgroup.controller;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.service.ChatService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.security.Principal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.MessageDeliveryException;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;
import org.springframework.web.socket.messaging.SessionUnsubscribeEvent;

@Tag(name = "09.Chat")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final ChatService chatService;
    private final SimpMessageSendingOperations template;
    private static final String DESTINATION = "/rooms/";

    @MessageMapping("/chat/enter")
    @Operation(summary = "채팅방 입장", description = "채팅방에 입장합니다. 입장 경로: \'/pub/chat/enter\'",
        tags = {"09.Chat"},
        responses = {
            @ApiResponse(responseCode = "200", description = "채팅방 입장 성공"),
        }
    )
    public void enterChatRoom(@Payload ChatCreateReq chatReq, Principal principal) {
        log.info("chatReq: {}, enter user: {}", chatReq.toString(), principal.getName());
        String msg = principal.getName() + "님이 채팅을 시작하였습니다.";
        template.convertAndSend(getDestinationUrl(chatReq), msg);
    }


    @MessageMapping("/chat")
    @Operation(summary = "채팅 전송", description = "채팅을 전송합니다. 메시지 보내는 경로: \'/pub/chat\'",
        tags = {"09.Chat"},
        responses = {
            @ApiResponse(responseCode = "200", description = "채팅 전송 성공"),
        }
    )
    public void sentChat(@Payload ChatCreateReq chatReq) {
        log.info("chatReq: {}", chatReq.toString());
        chatService.createChat(chatReq);
        template.convertAndSend(getDestinationUrl(chatReq), chatReq);
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

    @NotNull
    private String getDestinationUrl(ChatCreateReq chatReq) {
        return DESTINATION + chatReq.getChatRoomNo();
    }

}

