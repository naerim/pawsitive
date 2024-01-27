package com.pawsitive.contentgroup.service;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import com.pawsitive.contentgroup.repository.ContentRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContentServiceImpl implements ContentService {
    private final ContentRepository contentRepository;

    @Override
    public List<ContentDetailRes> getContentList() {
        return contentRepository.getContentList();
    }


    @Override
    public List<ContentDetailRes> getContentListByContentCategoryNo(int contentCategoryNo) {
        return contentRepository.getContentListByContentCategoryNo(contentCategoryNo);
    }

    @Override
    public ContentDetailRes getContent(int contentNo) {
        return contentRepository.getContentByContentNo(contentNo);
    }
}
