package com.pawsitive.communitygroup.dto.response;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommunityBoardDetailRes {
    private int boardNo;
    private String memberEmail;
    private String memberName;
    private int memberStage;
    private String memberAddress;
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
