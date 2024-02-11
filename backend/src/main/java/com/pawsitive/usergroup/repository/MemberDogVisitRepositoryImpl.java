package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.entity.MemberDogVisit;
import com.pawsitive.usergroup.entity.QMemberDogVisit;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

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
    
}
