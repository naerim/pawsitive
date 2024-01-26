package com.pawsitive.contentgroup.service;

import com.pawsitive.contentgroup.dto.response.ContentRes;
import com.pawsitive.contentgroup.entity.Content;
import com.pawsitive.contentgroup.repository.ContentRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContentServiceImpl implements ContentService {
    private final ContentRepository contentRepository;

    @Override
    public List<Content> getContentList() {
        return contentRepository.findContents();
    }

    @Override
    public List<ContentRes> getContentList(int contentCategoryNo) {
        List<Content> contentList =
            contentRepository.findContentListByContentCategoryNo(contentCategoryNo);

    }
}
