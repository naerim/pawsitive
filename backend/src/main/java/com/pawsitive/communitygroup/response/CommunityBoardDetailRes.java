package com.pawsitive.communitygroup.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommunityBoardDetailRes {
    private int boardNo;
    private String memberEmail;
    private String memberName;
    private String title;
    private String content;
    private String image;
    private Boolean isPublic;
    private double latitude;
    private double longitude;
    private LocalDateTime createdAt;
    private int hit;
    private int communityCategoryNo;
    private String communityCategoryName;
}
