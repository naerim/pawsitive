package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.dogenum.DogNeutralizedEnum;
import com.pawsitive.doggroup.dogenum.DogSexEnum;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.QDog;
import com.pawsitive.doggroup.entity.QDogFile;
import com.pawsitive.usergroup.entity.QUser;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * @author 이하늬
 * @since 1.0
 */
public class DogRepositoryImpl extends QuerydslRepositorySupport implements DogRepositoryCustom {
    private static final QDog qDog = QDog.dog;
    private static final QUser qUser = QUser.user;
    private static final QDogFile qDogFile = QDogFile.dogFile;

    public DogRepositoryImpl() {
        super(Dog.class);
    }

    @Override
    public Optional<DogDetailRes> getDogByDogNo(int dogNo) {

        return Optional.ofNullable(getQueryDogDetailList().where(qDog.dogNo.eq(dogNo)).fetchOne());
    }

    @Override
    public List<DogListRes> getRecommendationDogList() {
        return getQueryDogList().fetch();
    }

    @Override
    public List<DogListRes> getRecommendationDogList(int num) {
        return getQueryDogList().limit(num).fetch();
    }

    @Override
    public List<String> getDogFilesByDogNo(int dogNo) {
        return from(qDogFile).select(qDogFile.file).where(qDogFile.dog.dogNo.eq(dogNo)).fetch();
    }

    @Override
    public Page<DogListRes> getDogList(Pageable pageable, List<String> kind, Integer sex,
                                       Integer neutralized) {
        List<DogListRes> content =
            getQueryDogList()
                .where(eqSex(sex), eqNeutralized(neutralized), inKindList(kind))
                .orderBy(qDog.createdAt.desc())
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();

        Long count = from(qDog).select(qDog.count())
            .where(eqSex(sex), eqNeutralized(neutralized), inKindList(kind))
            .fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    private BooleanExpression eqSex(Integer sex) {
        if (Objects.isNull(sex) || sex.equals(0)) {
            return null;
        }
        return qDog.sex.eq(DogSexEnum.intToString(sex));
    }

    private BooleanExpression eqNeutralized(Integer neutralized) {
        if (Objects.isNull(neutralized) || neutralized.equals(0)) {
            return null;
        }
        return qDog.isNeutralized.eq(DogNeutralizedEnum.intToBoolean(neutralized));
    }

    BooleanExpression inKindList(List<String> kind) {
        if (Objects.isNull(kind) || kind.isEmpty()) {
            return null;
        }
        return qDog.kind.in(kind);
    }

    @Override
    public Page<DogListRes> getDogListByKindNo(Pageable pageable, List<String> kind) {
        List<DogListRes> content =
            getQueryDogList()
                .orderBy(qDog.createdAt.desc())
                .where(qDog.kind.stringValue().in(kind))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetch();

        Long count = from(qDog).select(qDog.count()).fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    @Override
    public List<DogListRes> getDogListByShelterNo(int shelterNo) {
        return getQueryDogList()
            .orderBy(qDog.createdAt.desc())
            .where(qDog.user.userNo.eq(shelterNo))
            .fetch();
    }

    @Override
    public List<DogListRes> getDogListByShelterNo(int shelterNo, Integer num) {
        return getQueryDogList()
            .orderBy(qDog.createdAt.desc())
            .where(qDog.user.userNo.eq(shelterNo))
            .limit(num)
            .fetch();
    }

    private JPQLQuery<DogDetailRes> getQueryDogDetailList() {
        return from(qDog).innerJoin(qDog.user, qUser).select(
            Projections.fields(DogDetailRes.class, qDog.dogNo, qUser.userNo,
                qUser.name.as("userName"), qDog.name,
                ExpressionUtils.as(qDog.kind.stringValue(), "kind"), qDog.createdAt,
                qDog.isNeutralized, qDog.age, qDog.note, qDog.hit,
                qDog.mbti,
                ExpressionUtils.as(qDog.status.stringValue().castToNum(Integer.class), "statusNo"),
                qDog.sex, qUser.address));
    }

    private JPQLQuery<DogListRes> getQueryDogList() {
        return from(qDog).innerJoin(qDog.user, qUser).select(
            Projections.fields(DogListRes.class, qDog.dogNo, qDog.name,
                ExpressionUtils.as(qDog.kind.stringValue(), "kind"),
                qDog.isNeutralized, qDog.age,
                ExpressionUtils.as(qDog.status.stringValue().castToNum(Integer.class), "statusNo"),
                qDog.sex));
    }
}
