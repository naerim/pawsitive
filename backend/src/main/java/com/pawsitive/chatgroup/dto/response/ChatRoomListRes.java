package com.pawsitive.chatgroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ChatRoomListRes {
    private int chatRoomNo;
    private int dogNo;
    private String id;
    private String name;
    private String memberProfileImage;
    private String shelterProfileImage;
    private LastChat lastChat;

    @AllArgsConstructor
    @Getter
    public static class LastChat {
        private String message;
        private String createdAt;
    }
}
