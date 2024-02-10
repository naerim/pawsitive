package com.pawsitive.dummy;

import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityCommentDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityDetailRes;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import com.pawsitive.communitygroup.entity.CommunityCategory;
import com.pawsitive.usergroup.entity.User;
import java.time.LocalDateTime;
import java.util.List;

/**
 * @author 이하늬
 * @since 1.0
 */
public class CommunityDummy {
    public static CommunityBoard getSuccessBoardEntity() {
        return CommunityBoard.builder()
            .member(MemberDummy.getSuccessEntity())
            .title("멍멍이랑 산책 나왔어요")
            .content("멍멍이가 아주 신났네요")
            .isPublic(true)
            .latitude(127.01)
            .longitude(35.2)
            .communityCategory(CommunityCategoryDummy.getSuccessEntity())
            .build();
    }

    public static CommunityBoardDetailRes getSuccessBoardDto() {
        User user = UserDummy.getSuccessEntity();
        CommunityBoard board = getSuccessBoardEntity();
        CommunityCategory category = CommunityCategoryDummy.getSuccessEntity();

        return new CommunityBoardDetailRes(
            1, user.getEmail(), user.getName(), 0, "광주광역시", board.getTitle(),
            board.getContent(), board.getIsPublic(), board.getLatitude(),
            board.getLongitude(), LocalDateTime.now(), 10, category.getCommunityCategoryNo(),
            category.getCommunityCategoryName(), null);
    }

    public static CommunityCommentDetailRes getSuccessCommentDto() {
        CommunityBoard board = getSuccessBoardEntity();
        User user = UserDummy.getSuccessEntity();

        return new CommunityCommentDetailRes(board.getCommunityBoardNo(), 1,
            user.getEmail(), user.getName(), "정말 귀엽네요!!", LocalDateTime.now());
    }

    public static CommunityDetailRes getSuccessDto() {
        return new CommunityDetailRes(getSuccessBoardDto(), List.of(getSuccessCommentDto()));
    }
}
