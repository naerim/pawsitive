package com.pawsitive.common.dto.response;

import lombok.Getter;

/**
 * @author 이하늬
 * @since 1.0
 */
@Getter
public enum BaseResponseMessage {
    SUCCESS("SUCCESS"),
    FAIL("FAIL");

    private final String message;

    BaseResponseMessage(String message) {
        this.message = message;
    }

}