package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import com.pawsitive.contentgroup.entity.Content;
import com.pawsitive.contentgroup.entity.QContent;
import com.pawsitive.contentgroup.entity.QContentCategory;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class ContentRepositoryImpl extends QuerydslRepositorySupport
    implements ContentRepositoryCustom {
    private static final QContent qContent = QContent.content1;
    private static final QContentCategory qContentCategory = QContentCategory.contentCategory;

    public ContentRepositoryImpl() {
        super(Content.class);
    }

    @Override
    public Page<ContentDetailRes> getContentList(Pageable pageable) {

        List<ContentDetailRes> content = getQueryContentList().fetch();
        Long count = from(qContent).select(qContent.count()).fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    @Override
    public Page<ContentDetailRes> getContentListByContentCategoryNo(Pageable pageable,
                                                                    int categoryNo) {

        List<ContentDetailRes> content = getQueryContentList()
            .where(qContentCategory.contentCategoryNo.eq(categoryNo))
            .fetch();

        Long count = from(qContent).select(qContent.count())
            .where(qContentCategory.contentCategoryNo.eq(categoryNo))
            .fetchOne();

        return new PageImpl<>(content, pageable, count);
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
