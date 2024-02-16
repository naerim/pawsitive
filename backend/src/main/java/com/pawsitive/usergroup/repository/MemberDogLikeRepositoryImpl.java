package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.entity.MemberDogLike;
import com.pawsitive.usergroup.entity.QMemberDogLike;
import com.pawsitive.usergroup.entity.QUser;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class MemberDogLikeRepositoryImpl extends QuerydslRepositorySupport implements MemberDogLikeRepositoryCustom {

    private static final QMemberDogLike qMemberDogLike = QMemberDogLike.memberDogLike;
    private static final QUser qUser = QUser.user;

    public MemberDogLikeRepositoryImpl() {
        super(MemberDogLike.class);
    }

    @Override
    public List<Integer> getLikedDogList(Integer userNo) {
        return from(qMemberDogLike)
            .select(qMemberDogLike.dog.dogNo)
            .where(qMemberDogLike.member.userNo.eq(userNo))
            .orderBy(qMemberDogLike.dog.dogNo.asc())
            .fetch();
    }

    @Override
    public MemberDogLike getUserDogLiked(Integer dogNo, Integer userNo) {
        return from(qMemberDogLike)
            .innerJoin(qMemberDogLike.member.user, qUser)
            .select(qMemberDogLike)
            .where(qMemberDogLike.dog.dogNo.eq(dogNo), qMemberDogLike.member.user.userNo.eq(userNo))
            .fetchOne();
    }


}
