package com.pawsitive.chatgroup.dto.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author 이하늬
 * @since 1.0
 */
@AllArgsConstructor
@Getter
public class LastChatTmp {

    private String message;
    private LocalDateTime createdDate;
}