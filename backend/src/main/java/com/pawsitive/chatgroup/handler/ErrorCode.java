package com.pawsitive.chatgroup.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * @author 이하늬
 * @since 1.0
 */
@Getter
public enum ErrorCode {
    INVALID_MESSAGE("유효하지 않은 메세지입니다.", HttpStatus.BAD_REQUEST.value()),
    INVALID_TOKEN("유효하지 않은 토큰입니다.", HttpStatus.UNAUTHORIZED.value());


    private final String message;
    private final int status;

    ErrorCode(String message, int status) {
        this.message = message;
        this.status = status;
    }
}
