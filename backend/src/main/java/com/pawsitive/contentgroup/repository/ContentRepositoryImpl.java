package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.dto.response.ContentRes;
import com.pawsitive.contentgroup.entity.Content;
import com.pawsitive.contentgroup.entity.QContent;
import com.pawsitive.contentgroup.entity.QContentCategory;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class ContentRepositoryImpl extends QuerydslRepositorySupport
    implements ContentRepositoryCustom {

    public ContentRepositoryImpl() {
        super(Content.class);
    }

    @Override
    public List<ContentRes> findContentListByContentCategoryNo(int contentCategoryNo) {
        QContent qContent = QContent.content1;
        QContentCategory qContentCategory = QContentCategory.contentCategory;

        JPQLQuery<ContentRes> contentListQuery =
            from(qContent)
                .innerJoin(qContent.contentCategory, qContentCategory)
                .select(Projections.constructor(ContentRes.class, qContent.contentNo,
                    qContentCategory.contentCategoryEnum, qContent.title, qContent.content,
                    qContent.photo))
                .where(qContentCategory.contentCategoryNo.eq(contentCategoryNo));

        return contentListQuery.fetch();
    }
}
