package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import com.pawsitive.contentgroup.entity.Content;
import com.pawsitive.contentgroup.entity.QContent;
import com.pawsitive.contentgroup.entity.QContentCategory;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class ContentRepositoryImpl extends QuerydslRepositorySupport
    implements ContentRepositoryCustom {
    private final QContent qContent = QContent.content1;
    private final QContentCategory qContentCategory = QContentCategory.contentCategory;

    public ContentRepositoryImpl() {
        super(Content.class);
    }

    @Override
    public List<ContentDetailRes> findContentList() {

        JPQLQuery<ContentDetailRes> contentListQuery = getContentList();

        return contentListQuery.fetch();
    }

    @Override
    public List<ContentDetailRes> findContentListByContentCategoryNo(int contentCategoryNo) {

        return getContentList()
            .where(qContentCategory.contentCategoryNo.eq(contentCategoryNo))
            .fetch();
    }

    @Override
    public ContentDetailRes findContentByContentNo(int contentNo) {
        return getContentList()
            .where(qContent.contentNo.eq(contentNo))
            .fetchOne();
    }


    private JPQLQuery<ContentDetailRes> getContentList() {
        return from(qContent)
            .innerJoin(qContent.contentCategory, qContentCategory)
            .select(Projections.constructor(ContentDetailRes.class, qContent.contentNo,
                qContent.contentCategory.contentCategoryNo,
                qContentCategory.contentCategoryEnum.stringValue(), qContent.title,
                qContent.content, qContent.photo));
    }

}
