package com.pawsitive.chatgroup.dto.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatRes {

    private int chatNo;
    private int userNo;
    
    private String userName;
    private String userImage;
    private String message;
    private LocalDateTime createdAt;


}