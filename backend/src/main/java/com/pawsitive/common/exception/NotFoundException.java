package com.pawsitive.common.exception;

public class NotFoundException extends RuntimeException {

    public NotFoundException(String domain) {
        super("존재하지 않는 " + domain + "입니다.");
    }
    
}