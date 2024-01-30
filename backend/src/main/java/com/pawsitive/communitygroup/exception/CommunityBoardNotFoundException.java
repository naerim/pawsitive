package com.pawsitive.communitygroup.exception;

public class CommunityBoardNotFoundException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 커뮤니티 글입니다.";

    public CommunityBoardNotFoundException() {
        super(MESSAGE);
    }
}
