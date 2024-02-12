package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.dto.response.MemberDogVisitListRes;
import com.pawsitive.usergroup.dto.response.MemberDogVisitRes;
import com.pawsitive.usergroup.entity.MemberDogVisit;
import com.pawsitive.usergroup.entity.QMemberDogVisit;
import com.querydsl.core.types.Projections;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class MemberDogVisitRepositoryImpl extends QuerydslRepositorySupport implements MemberDogVisitRepositoryCustom {

    private static final QMemberDogVisit qMemberDogVisit = QMemberDogVisit.memberDogVisit;

    public MemberDogVisitRepositoryImpl() {
        super(MemberDogVisit.class);
    }

    @Override
    public MemberDogVisit getMemberDogVisited(int dogNo, int userNo) {
        return from(qMemberDogVisit)
            .select(qMemberDogVisit)
            .where(qMemberDogVisit.member.userNo.eq(userNo), qMemberDogVisit.dog.dogNo.eq(dogNo))
            .fetchOne();
    }

    @Override
    public MemberDogVisitListRes getMemberDogVisitedList(int userNo) {
        List<MemberDogVisitRes> visitedList = from(qMemberDogVisit)
            .select(Projections.fields(MemberDogVisitRes.class,
                qMemberDogVisit.memberDogVisitNo,
                qMemberDogVisit.member.userNo,
                qMemberDogVisit.dog.dogNo,
                qMemberDogVisit.createdAt))
            .where(qMemberDogVisit.member.userNo.eq(userNo))
            .fetch();

        Long count = from(qMemberDogVisit)
            .select(qMemberDogVisit.count())
            .fetchOne();

        return MemberDogVisitListRes.builder()
            .visitedList(visitedList)
            .count(count)
            .build();
    }

}
