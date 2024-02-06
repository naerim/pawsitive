package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ContentRepositoryCustom {

    /**
     * 컨텐츠를 전체 조회합니다.
     *
     * @return 모든 컨텐츠
     */
    Page<ContentDetailRes> getContentList(Pageable pageable);

    /**
     * 카테고리별 컨텐츠를 조회합니다.
     *
     * @param categoryNo 조회할 컨텐츠 카테고리 고유번호
     * @return 카테고리별 컨텐츠
     */

    Page<ContentDetailRes> getContentListByContentCategoryNo(Pageable pageable,
                                                             int categoryNo);

    /**
     * 컨텐츠 고유번호로 컨텐츠를 상세 조회합니다.
     *
     * @param contentNo 조회할 컨텐츠 고유번호
     * @return 컨텐츠
     */
    Optional<ContentDetailRes> getContentByContentNo(int contentNo);
}
