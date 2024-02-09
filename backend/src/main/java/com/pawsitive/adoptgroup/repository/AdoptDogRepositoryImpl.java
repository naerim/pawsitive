package com.pawsitive.adoptgroup.repository;

import com.pawsitive.adoptgroup.entity.AdoptDog;
import com.pawsitive.doggroup.dto.response.AdoptedDogRes;
import com.pawsitive.doggroup.entity.QAdoptDog;
import com.pawsitive.doggroup.entity.QDog;
import com.pawsitive.usergroup.entity.QMember;
import com.querydsl.core.types.Projections;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * AdoptDog QueryDsl 구현 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public class AdoptDogRepositoryImpl extends QuerydslRepositorySupport
    implements AdoptDogRepositoryCustom {

    private final QAdoptDog qAdoptDog = QAdoptDog.adoptDog;
    private final QDog qDog = QDog.dog;
    private final QMember qMember = QMember.member;


    public AdoptDogRepositoryImpl() {
        super(AdoptDog.class);
    }

    @Override
    public Optional<AdoptedDogRes> getAdoptedDogByUserNo(int userNo) {
        return Optional.ofNullable(from(qAdoptDog)
            .innerJoin(qAdoptDog.member, qMember)
            .innerJoin(qAdoptDog.dog, qDog)
            .select(Projections.fields(AdoptedDogRes.class, qAdoptDog.adoptDogNo, qMember.userNo,
                qDog.dogNo, qAdoptDog.name, qAdoptDog.createdAt, qAdoptDog.weight, qAdoptDog.age))
            .where(qMember.userNo.eq(userNo))
            .fetchOne());
    }

}
