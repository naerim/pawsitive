package com.pawsitive.contentgroup.service;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import com.pawsitive.contentgroup.exception.ContentNotFoundException;
import com.pawsitive.contentgroup.repository.ContentRepository;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContentServiceImpl implements ContentService {
    private final ContentRepository contentRepository;

    @Override
    public Page<ContentDetailRes> getContentList(Pageable pageable, Integer categoryNo) {
        Page<ContentDetailRes> contentsList;
        if (Objects.isNull(categoryNo)) {
            contentsList = contentRepository.getContentList(pageable);
        } else {
            contentsList =
                contentRepository.getContentListByContentCategoryNo(pageable, categoryNo);
        }
        return contentsList;
    }


    @Override
    public Page<ContentDetailRes> getContentListByContentCategoryNo(Pageable pageable,
                                                                    int contentCategoryNo) {
        return contentRepository.getContentListByContentCategoryNo(pageable, contentCategoryNo);
    }

    @Override
    @Cacheable(value = "contentList", key = "'contentNo:'+#contentNo")
    public ContentDetailRes getContent(int contentNo) {
        return contentRepository.getContentByContentNo(contentNo)
            .orElseThrow(ContentNotFoundException::new);
    }
}
