package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityCommentDetailRes;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import com.pawsitive.communitygroup.entity.QCommunityBoard;
import com.pawsitive.communitygroup.entity.QCommunityCategory;
import com.pawsitive.communitygroup.entity.QCommunityComment;
import com.pawsitive.communitygroup.entity.QCommunityImage;
import com.pawsitive.usergroup.entity.QMember;
import com.pawsitive.usergroup.entity.QUser;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class CommunityBoardRepositoryImpl extends QuerydslRepositorySupport
    implements CommunityBoardRepositoryCustom {
    private static final QCommunityBoard qBoard = QCommunityBoard.communityBoard;
    private static final QCommunityComment qComment = QCommunityComment.communityComment;
    private static final QMember qMember = QMember.member;
    private static final QUser qUser = QUser.user;
    private static final QCommunityCategory qCategory = QCommunityCategory.communityCategory;

    private final QCommunityImage qBoardImage = QCommunityImage.communityImage;

    public CommunityBoardRepositoryImpl() {
        super(CommunityBoard.class);
    }


    @Override
    public Page<CommunityBoardDetailRes> getBoardList(Pageable pageable) {
        List<CommunityBoardDetailRes> content =
            getQueryBoardList().orderBy(qBoard.createdAt.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetch();

        Long count = from(qBoard)
            .select(qBoard.count())
            .fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    @Override
    public List<CommunityBoardDetailRes> getRecommendationBoardListLimitNum(int num) {
        return getQueryBoardList().orderBy(qBoard.hit.desc()).limit(num).fetch();
    }

    @Override
    public Page<CommunityBoardDetailRes> getBoardListByCategoryNo(Pageable pageable,
                                                                  int categoryNo) {
        List<CommunityBoardDetailRes> content =
            getQueryBoardList().where(qCategory.communityCategoryNo.eq(categoryNo))
                .orderBy(qBoard.createdAt.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetch();

        Long count = from(qBoard)
            .innerJoin(qBoard.communityCategory, qCategory)
            .select(qBoard.count())
            .where(qCategory.communityCategoryNo.eq(categoryNo))
            .fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    @Override
    public Optional<CommunityBoardDetailRes> getBoardByBoardNo(int boardNo) {
        return Optional.ofNullable(
            (getQueryBoardList()).where(qBoard.communityBoardNo.eq(boardNo)).fetchOne());
    }


    @Override
    public List<CommunityCommentDetailRes> getCommentsByBoardNo(int boardNo) {
        return from(qComment)
            .innerJoin(qComment.board, qBoard)
            .innerJoin(qComment.member, qMember)
            .innerJoin(qMember.user, qUser)
            .select(
                Projections.constructor(CommunityCommentDetailRes.class, qBoard.communityBoardNo,
                    qComment.commentNo, qUser.email, qUser.name, qComment.content,
                    qComment.createdAt))
            .where(qComment.board.communityBoardNo.eq(boardNo))
            .fetch();
    }


    @Override
    public List<String> getCommunityImagesByDogNo(int boardNo) {
        return from(qBoardImage)
            .select(qBoardImage.image)
            .where(qBoardImage.communityBoard.communityBoardNo.eq(boardNo))
            .fetch();
    }

    private JPQLQuery<CommunityBoardDetailRes> getQueryBoardList() {
        return from(qBoard).innerJoin(qBoard.member, qMember).innerJoin(qMember.user, qUser)
            .innerJoin(qBoard.communityCategory, qCategory).select(
                Projections.fields(CommunityBoardDetailRes.class,
                    qBoard.communityBoardNo.as("boardNo"), qUser.email.as("memberEmail"),
                    qUser.name.as("memberName"), qMember.stage.as("memberStage"),
                    qUser.address.as("memberAddress"), qBoard.title, qBoard.content,
                    qBoard.isPublic, qBoard.latitude, qBoard.longitude, qBoard.createdAt,
                    qBoard.hit, qCategory.communityCategoryNo,
                    ExpressionUtils.as(qCategory.communityCategoryEnum.stringValue(),
                        "communityCategoryName")
                )
            );
    }

}
