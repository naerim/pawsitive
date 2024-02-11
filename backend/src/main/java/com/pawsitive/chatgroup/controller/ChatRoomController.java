package com.pawsitive.chatgroup.controller;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.chatgroup.dto.request.ChatRoomCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomListRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.dto.response.ChatSessionRes;
import com.pawsitive.chatgroup.dto.response.ChatTokenRes;
import com.pawsitive.chatgroup.service.ChatRoomService;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "05.ChatRoom")
@RestController
@RequestMapping("/api/v1/chatrooms")
@RequiredArgsConstructor
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    @GetMapping
    @Operation(summary = "채팅방 전체 조회", description = "회원 고유번호나 유기견 번호로 채팅방을 전체 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "채팅 전체 조회 성공"),
        }
    )
    public ResponseEntity<List<ChatRoomListRes>> getChatRoomListByUserNo(@RequestParam String type,
                                                                         @RequestParam int value) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getChatRoomList(type, value));
    }

    @GetMapping("/{chatRoomNo}")
    @Operation(summary = "채팅방 채팅 이력 조회", description = "채팅방을 상세 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "채팅방 고유 번호에 해당하는 채팅 이력 조회 성공"),
            @ApiResponse(responseCode = "400", description = "전달받은 채팅방 고유 번호에 해당하는 채팅방이 없음"),
        }
    )
    public ResponseEntity<List<ChatRes>> getChatRoomByChatRoomNo(@PathVariable int chatRoomNo) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getChatHistoryByChatRoomNo(chatRoomNo));
    }

    @PostMapping
    @Operation(summary = "채팅방 생성/등록", description = "채팅방을 생성/등록합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "채팅방 등록 성공"),
        }
    )
    public ResponseEntity<ChatRoomRes> createRoom(
        @RequestBody ChatRoomCreateReq chatRoomCreateReq, Authentication authentication) {
        return ResponseEntity
            .status(CREATED)
            .body(chatRoomService.createChatRoom(chatRoomCreateReq, authentication));
    }

    @PostMapping("/sessions")
    @Operation(summary = "화상 채팅방 커넥션 생성", description = "화상 채팅방 커넥션을 생성해 sessionId를 반환합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "화상 채팅방 커넥션 생성 성공"),
        }
    )
    public ResponseEntity<ChatSessionRes> createSessions(
        @RequestBody(required = false) Map<String, Object> params)
        throws OpenViduJavaClientException, OpenViduHttpException {

        return ResponseEntity
            .status(OK)
            .body(chatRoomService.createSessions(params));
    }

    @PostMapping("/sessions/{sessionId}/connections")
    @Operation(summary = "화상 채팅방 토큰 얻기", description = "sessionId에 대한 화상 채팅방 토큰을 반환합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "화상 채팅방 토 조회 성공"),
        }
    )
    public ResponseEntity<ChatTokenRes> createConnection(
        @PathVariable("sessionId") String sessionId,
        @RequestBody(required = false) Map<String, Object> params)
        throws OpenViduJavaClientException, OpenViduHttpException {

        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getToken(sessionId, params));
    }

}
