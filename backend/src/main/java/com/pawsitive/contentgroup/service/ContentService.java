package com.pawsitive.contentgroup.service;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import java.util.List;

public interface ContentService {
    List<ContentDetailRes> getContentList();

    List<ContentDetailRes> getContentListByContentCategoryNo(int contentCategoryNo);

    ContentDetailRes getContent(int contentNo);
}
