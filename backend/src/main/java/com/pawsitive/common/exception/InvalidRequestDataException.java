package com.pawsitive.common.exception;

/**
 * @author 이하늬
 * @since 1.0
 */
public class InvalidRequestDataException extends RuntimeException {

    public InvalidRequestDataException(String msg) {
        super(msg);
    }
}
