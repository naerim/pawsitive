package com.pawsitive.communitygroup.dto.response;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommunityBoardDetailRes {
    private int boardNo;
    private String memberEmail;
    private String memberName;
    private String title;
    private String content;
    private Boolean isPublic;
    private double latitude;
    private double longitude;
    private LocalDateTime createdAt;
    private int hit;
    private int communityCategoryNo;
    private String communityCategoryName;
    private List<String> images;
}