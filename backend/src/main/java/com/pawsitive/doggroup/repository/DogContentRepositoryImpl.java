package com.pawsitive.doggroup.repository;

import com.pawsitive.contentgroup.entity.QContent;
import com.pawsitive.doggroup.dto.response.DogContentRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.QDogContent;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * @author 이하늬
 * @since 1.0
 */
public class DogContentRepositoryImpl extends QuerydslRepositorySupport
    implements DogContentRepositoryCustom {
    private static final QContent qContent = QContent.content1;
    private static final QDogContent qDogContent = QDogContent.dogContent;

    public DogContentRepositoryImpl() {
        super(Dog.class);
    }

    @Override
    public Optional<DogContentRes> getDogContentByDogNo(int dogNo) {
        JPQLQuery<DogContentRes> getDogContentQuery =
            from(qDogContent)
                .innerJoin(qContent).on(qDogContent.content.eq(qContent))
                .select(
                    Projections.constructor(DogContentRes.class, qContent.contentNo,
                        qContent.title))
                .where(qDogContent.dog.dogNo.eq(dogNo));

        return Optional.ofNullable(getDogContentQuery.fetchOne());
    }
}
