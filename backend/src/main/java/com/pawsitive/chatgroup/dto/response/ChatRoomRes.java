package com.pawsitive.chatgroup.dto.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ChatRoomRes {
    private int chatRoomNo;
    private String id;
    private String name;
    private LocalDateTime createdAt;
    private int dogNo;
}
