package com.pawsitive.communitygroup.exception;

public class CommunityCategoryNotFoundException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 커뮤니티 카테고리입니다.";

    public CommunityCategoryNotFoundException() {
        super(MESSAGE);
    }
}
