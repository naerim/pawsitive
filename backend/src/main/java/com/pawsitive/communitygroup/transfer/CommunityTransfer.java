package com.pawsitive.communitygroup.transfer;

import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CommunityTransfer {

    public static CommunityBoardDetailRes entityToDto(CommunityBoard communityBoard) {
        return CommunityBoardDetailRes.builder()
            .boardNo(communityBoard.getCommunityBoardNo())
            .memberEmail(communityBoard.getMember().getUser().getEmail())
            .memberName(communityBoard.getMember().getUser().getName())
            .memberStage(communityBoard.getMember().getStage())
            .memberAddress(communityBoard.getMember().getUser().getAddress())
            .title(communityBoard.getTitle())
            .content(communityBoard.getContent())
            .isPublic(communityBoard.getIsPublic())
            .latitude(communityBoard.getLatitude())
            .longitude(communityBoard.getLongitude())
            .createdAt(communityBoard.getCreatedAt())
            .hit(communityBoard.getHit())
            .communityCategoryNo(communityBoard.getCommunityCategory().getCommunityCategoryNo())
            .communityCategoryName(communityBoard.getCommunityCategory().getCommunityCategoryEnum()
                .name())
            .build();
    }

}
