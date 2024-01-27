package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import java.util.List;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ContentRepositoryCustom {

    /**
     * 컨텐츠를 전체 조회합니다.
     *
     * @return 모든 컨텐츠
     */
    List<ContentDetailRes> getContentList();

    /**
     * 카테고리별 컨텐츠를 조회합니다.
     *
     * @param contentCategoryNo 조회할 컨텐츠 카테고리 고유번호
     * @return 카테고리별 컨텐츠
     */

    List<ContentDetailRes> getContentListByContentCategoryNo(int contentCategoryNo);

    /**
     * 컨텐츠 고유번호로 컨텐츠를 상세 조회합니다.
     *
     * @param contentNo 조회할 컨텐츠 고유번호
     * @return 컨텐츠
     */
    ContentDetailRes getContentByContentNo(int contentNo);
}
