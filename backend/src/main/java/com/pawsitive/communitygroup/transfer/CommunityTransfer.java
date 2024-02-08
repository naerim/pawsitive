package com.pawsitive.communitygroup.transfer;

import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityCommentDetailRes;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import com.pawsitive.communitygroup.entity.CommunityComment;
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

    public static CommunityCommentDetailRes entityToDto(CommunityComment communityComment) {
        return CommunityCommentDetailRes.builder()
            .boardNo(communityComment.getBoard().getCommunityBoardNo())
            .commentNo(communityComment.getCommentNo())
            .memberEmail(communityComment.getMember().getUser().getEmail())
            .memberName(communityComment.getMember().getUser().getName())
            .content(communityComment.getContent())
            .createdAt(communityComment.getCreatedAt())
            .build();
    }

}
