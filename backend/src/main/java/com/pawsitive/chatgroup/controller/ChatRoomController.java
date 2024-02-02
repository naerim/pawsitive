package com.pawsitive.chatgroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.chatgroup.entity.ChatRoom;
import com.pawsitive.chatgroup.service.ChatRoomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "06.ChatRoom")
@RestController
@RequestMapping("/api/v1/chatrooms")
@RequiredArgsConstructor
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    @GetMapping
    @Operation(summary = "채팅방 전체 조회", description = "회원 고유번호로 채팅방을 전체 조회합니다.",
        tags = {"06.ChatRoom"},
        responses = {
            @ApiResponse(responseCode = "200", description = "채팅 전체 조회 성공"),
        }
    )
    public ResponseEntity<List<ChatRoom>> getRooms(@RequestParam int userNo) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getChatRooms(userNo));
    }

    @PostMapping
    @Operation(summary = "채팅방 생성/등록", description = "채팅방을 생성/등록합니다.",
        tags = {"06.ChatRoom"},
        responses = {
            @ApiResponse(responseCode = "201", description = "채팅방 등록 성공"),
        }
    )
    public ResponseEntity<ChatRoom> createRoom() {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.createChatRoom());
    }

    @GetMapping("/{chatRoomNo}")
    @Operation(summary = "채팅방 상세 조회", description = "채팅방을 상세 조회합니다.",
        tags = {"06.ChatRoom"},
        responses = {
            @ApiResponse(responseCode = "200", description = "채팅방 고유 번호에 해당하는 채팅방 상세 조회 성공"),
            @ApiResponse(responseCode = "400", description = "전달받은 " +
                "채팅방 고유 번호에 해당하는 채팅방이 없음"),
        }
    )
    public ResponseEntity<ChatRoom> getChatRoomByChatRoomNo(@PathVariable String chatRoomNo) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getChatRoomByChatRoomNo(chatRoomNo));
    }

}
