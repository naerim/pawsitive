package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import com.pawsitive.contentgroup.entity.Content;
import com.pawsitive.contentgroup.entity.QContent;
import com.pawsitive.contentgroup.entity.QContentCategory;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class ContentRepositoryImpl extends QuerydslRepositorySupport
    implements ContentRepositoryCustom {
    private static final QContent qContent = QContent.content1;
    private static final QContentCategory qContentCategory = QContentCategory.contentCategory;

    public ContentRepositoryImpl() {
        super(Content.class);
    }

    @Override
    public List<ContentDetailRes> getContentList() {

        JPQLQuery<ContentDetailRes> contentListQuery = getQueryContentList();

        return contentListQuery.fetch();
    }

    @Override
    public List<ContentDetailRes> getContentListByContentCategoryNo(int contentCategoryNo) {

        return getQueryContentList()
            .where(qContentCategory.contentCategoryNo.eq(contentCategoryNo))
            .fetch();
    }

    @Override
    public Optional<ContentDetailRes> getContentByContentNo(int contentNo) {
        return Optional.ofNullable(getQueryContentList()
            .where(qContent.contentNo.eq(contentNo))
            .fetchOne());
    }


    private JPQLQuery<ContentDetailRes> getQueryContentList() {
        return from(qContent)
            .innerJoin(qContent.contentCategory, qContentCategory)
            .select(Projections.constructor(ContentDetailRes.class, qContent.contentNo,
                qContent.contentCategory.contentCategoryNo,
                qContentCategory.contentCategoryEnum.stringValue(), qContent.title,
                qContent.content, qContent.image));
    }

}
