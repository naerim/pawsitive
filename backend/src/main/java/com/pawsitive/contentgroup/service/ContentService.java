package com.pawsitive.contentgroup.service;

import com.pawsitive.contentgroup.dto.response.ContentRes;
import com.pawsitive.contentgroup.entity.Content;
import java.util.List;

public interface ContentService {
    List<Content> getContentList();

    List<ContentRes> getContentList(int contentCategoryNo);
}
