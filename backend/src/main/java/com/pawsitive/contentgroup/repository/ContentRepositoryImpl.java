package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.entity.Content;
import com.pawsitive.contentgroup.entity.QContent;
import com.pawsitive.contentgroup.entity.QContentCategory;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class ContentRepositoryImpl extends QuerydslRepositorySupport
    implements ContentRepositoryCustom {

    public ContentRepositoryImpl() {
        super(Content.class);
    }

    @Override
    public List<Content> findContentListByContentCategoryNo(int contentCategoryNo) {
        QContent qContent = QContent.content1;
        QContentCategory qContentCategory = QContentCategory.contentCategory1;

        JPQLQuery<Content> contentListQuery =
            from(qContent)
                .innerJoin(qContent.contentCategory, qContentCategory)
                .where(qContentCategory.contentCategoryNo.eq(contentCategoryNo));

        return contentListQuery.fetch();
    }
}
