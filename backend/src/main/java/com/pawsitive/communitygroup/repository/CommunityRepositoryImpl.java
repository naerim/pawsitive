package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityCommentDetailRes;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import com.pawsitive.communitygroup.entity.QCommunityBoard;
import com.pawsitive.communitygroup.entity.QCommunityCategory;
import com.pawsitive.communitygroup.entity.QCommunityComment;
import com.pawsitive.usergroup.entity.QMember;
import com.pawsitive.usergroup.entity.QUser;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class CommunityRepositoryImpl extends QuerydslRepositorySupport
    implements CommunityRepositoryCustom {
    private final QCommunityBoard qBoard = QCommunityBoard.communityBoard;
    private final QCommunityComment qComment = QCommunityComment.communityComment;
    private final QMember qMember = QMember.member;
    private final QUser qUser = QUser.user;
    private final QCommunityCategory qCategory = QCommunityCategory.communityCategory;

    public CommunityRepositoryImpl() {
        super(CommunityBoard.class);
    }


    @Override
    public List<CommunityBoardDetailRes> getBoardList() {
        return getQueryBoardList()
            .orderBy(qBoard.createdAt.desc())
            .fetch();
    }

    @Override
    public List<CommunityBoardDetailRes> getRecommendationBoardListLimitNum(int num) {
        return getQueryBoardList()
            .orderBy(qBoard.hit.desc())
            .limit(num)
            .fetch();
    }

    @Override
    public List<CommunityBoardDetailRes> getBoardListByCategoryNo(int categoryNo) {
        return getQueryBoardList()
            .where(qCategory.communityCategoryNo.eq(categoryNo))
            .orderBy(qBoard.createdAt.desc())
            .fetch();


    }

    @Override
    public Optional<CommunityBoardDetailRes> getBoardByBoardNo(int boardNo) {
        return Optional.ofNullable((getQueryBoardList())
            .where(qBoard.communityBoardNo.eq(boardNo))
            .fetchOne());
    }


    @Override
    public List<CommunityCommentDetailRes> getCommentsByBoardNo(int boardNo) {
        return from(qComment)
            .innerJoin(qComment.board, qBoard)
            .innerJoin(qComment.member, qMember)
            .innerJoin(qMember.user, qUser)
            .select(Projections.constructor(CommunityCommentDetailRes.class,
                qBoard.communityBoardNo,
                qComment.CommunityCommentNo,
                qUser.email,
                qUser.name,
                qComment.content,
                qComment.createdAt))
            .fetch();
    }


    private JPQLQuery<CommunityBoardDetailRes> getQueryBoardList() {
        return from(qBoard)
            .innerJoin(qBoard.member, qMember)
            .innerJoin(qMember.user, qUser)
            .innerJoin(qBoard.communityCategory, qCategory)
            .select(Projections.constructor(
                CommunityBoardDetailRes.class,
                qBoard.communityBoardNo,
                qUser.email,
                qUser.name,
                qBoard.title,
                qBoard.content,
                qBoard.image,
                qBoard.isPublic,
                qBoard.latitude,
                qBoard.longitude,
                qBoard.createdAt,
                qBoard.hit,
                qCategory.communityCategoryNo,
                qCategory.communityCategoryEnum.stringValue()));
    }

}
