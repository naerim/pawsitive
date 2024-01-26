package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.dto.response.ContentRes;
import java.util.List;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ContentRepositoryCustom {

    /**
     * 카테고리별 컨텐츠를 조회합니다.
     *
     * @param contentCategoryNo 조회할 컨텐츠 카테고리 고유번호
     * @return 카테고리별 컨텐츠
     */
    List<ContentRes> findContentListByContentCategoryNo(int contentCategoryNo);
}
