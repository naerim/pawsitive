package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.QDog;
import com.pawsitive.doggroup.entity.QDogImage;
import com.pawsitive.usergroup.entity.QUser;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * @author 이하늬
 * @since 1.0
 */
public class DogRepositoryImpl extends QuerydslRepositorySupport implements DogRepositoryCustom {
    private final QDog qDog = QDog.dog;
    private final QUser qUser = QUser.user;
    private final QDogImage qDogImage = QDogImage.dogImage;

    public DogRepositoryImpl() {
        super(Dog.class);
    }

    @Override
    public Optional<DogDetailRes> getDogByDogNo(int dogNo) {
        return Optional.ofNullable(getQueryDogList()
            .where(qDog.dogNo.eq(dogNo))
            .fetchOne());
    }

    @Override
    public List<DogDetailRes> getRecommendationDogList(int num) {
        return getQueryDogList()
            .limit(num)
            .fetch();
    }

    private JPQLQuery<DogDetailRes> getQueryDogList() {
        return from(qDog)
            .innerJoin(qDog.user, qUser)
            .select(Projections.constructor(DogDetailRes.class, qDog.dogNo,
                qDog.user.userNo, qDog.name, qDog.kind, qDog.createdAt, qDog.isNaturalized,
                qDog.color, qDog.video, qDog.note, qDog.hit, qDog.mbti, qDog.images));
    }
}
