package com.pawsitive.contentgroup.service;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContentService {
    Page<ContentDetailRes> getContentList(Pageable pageable, Integer categoryNo);

    Page<ContentDetailRes> getContentListByContentCategoryNo(Pageable pageable,
                                                             int contentCategoryNo);

    ContentDetailRes getContent(int contentNo);
}
