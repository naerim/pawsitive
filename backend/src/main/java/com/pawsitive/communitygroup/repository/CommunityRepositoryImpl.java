package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.entity.Community;
import com.pawsitive.communitygroup.entity.QCommunity;
import com.pawsitive.communitygroup.entity.QCommunityBoard;
import com.pawsitive.communitygroup.entity.QCommunityComment;
import com.pawsitive.communitygroup.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.response.CommunityCommentDetailRes;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class CommunityRepositoryImpl extends QuerydslRepositorySupport
    implements CommunityRepositoryCustom {
    private final QCommunity qCommunity = QCommunity.community;
    private final QCommunityBoard qBoard = qCommunity.communityBoard;
    private final QCommunityComment qComment = qCommunity.communityComment;

    public CommunityRepositoryImpl() {
        super(Community.class);
    }


    @Override
    public List<CommunityBoardDetailRes> getCommunityList() {
        return null;
    }

    @Override
    public List<Community> getRecommendationCommunityList(int num) {
        return from(qCommunity)
            .limit(num)
            .fetch();
    }

    @Override
    public List<CommunityBoardDetailRes> getCommunityListByCommunityCategoryNo(
        int communityCategoryNo) {
        return null;
    }

    @Override
    public Optional<CommunityBoardDetailRes> getBoardByBoardNo(int boardNo) {
        JPQLQuery<CommunityBoardDetailRes> getQueryBoard = from(qCommunity)
            .select(Projections.constructor(CommunityBoardDetailRes.class,
                qBoard.member.user.email,
                qBoard.member.user.name,
                qBoard.title,
                qBoard.content,
                qBoard.image,
                qBoard.isPublic,
                qBoard.latitude,
                qBoard.longitude,
                qBoard.createdAt,
                qBoard.hit,
                qBoard.communityCategory.communityCategoryNo,
                qBoard.communityCategory.communityCategoryEnum.stringValue()));
        return Optional.ofNullable((getQueryBoard)
            .where(qCommunity.communityBoard.communityBoardNo.eq(boardNo))
            .fetchOne());
    }

    @Override
    public List<CommunityCommentDetailRes> getCommentsByBoardNo(int boardNo) {
        return from(qCommunity)
            .select(Projections.constructor(CommunityCommentDetailRes.class,
                qComment.member.user.email,
                qComment.member.user.name,
                qComment.content,
                qComment.createdAt))
            .fetch();
    }
}
