package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.QDog;
import com.pawsitive.doggroup.entity.QDogImage;
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

/**
 * @author 이하늬
 * @since 1.0
 */
public class DogRepositoryImpl extends QuerydslRepositorySupport implements DogRepositoryCustom {
    private static final QDog qDog = QDog.dog;
    private static final QUser qUser = QUser.user;
    private static final QDogImage qDogImage = QDogImage.dogImage;

    public DogRepositoryImpl() {
        super(Dog.class);
    }

    @Override
    public Optional<DogDetailRes> getDogByDogNo(int dogNo) {

        return Optional.ofNullable(getQueryDogDetailList().where(qDog.dogNo.eq(dogNo)).fetchOne());
    }

    @Override
    public List<DogDetailRes> getRecommendationDogList(int num) {
        return getQueryDogDetailList().limit(num).fetch();
    }

    @Override
    public List<String> getDogImagesByDogNo(int dogNo) {
        return from(qDogImage).select(qDogImage.image).where(qDogImage.dog.dogNo.eq(dogNo)).fetch();
    }

    @Override
    public Page<DogListRes> getDogList(Pageable pageable) {

        List<DogListRes> content =
            getQueryDogList()
                .orderBy(qDog.createdAt.desc())
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();

        Long count = from(qDog).select(qDog.count()).fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    @Override
    public Page<DogListRes> getDogListByKindNo(Pageable pageable, String kind) {
        List<DogListRes> content =
            getQueryDogList()
                .orderBy(qDog.createdAt.desc())
                .where(qDog.kind.stringValue().eq(kind))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetch();

        Long count = from(qDog).select(qDog.count()).fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    @Override
    public Page<DogListRes> getDogListByShelterNo(Pageable pageable, Integer shelterNo) {
        List<DogListRes> content =
            getQueryDogList()
                .orderBy(qDog.createdAt.desc())
                .where(qUser.userNo.eq(shelterNo))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetch();

        Long count = from(qDog).select(qDog.count()).fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    private JPQLQuery<DogDetailRes> getQueryDogDetailList() {
        return from(qDog).innerJoin(qDog.user, qUser).select(
            Projections.fields(DogDetailRes.class, qDog.dogNo, qUser.userNo,
                qUser.name.as("userName"), qDog.name,
                ExpressionUtils.as(qDog.kind.stringValue(), "kind"), qDog.createdAt,
                qDog.isNeutralized, qDog.age, qDog.video, qDog.note, qDog.hit,
                qDog.mbti,
                ExpressionUtils.as(qDog.status.stringValue().castToNum(Integer.class), "statusNo"),
                qDog.sex));
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
