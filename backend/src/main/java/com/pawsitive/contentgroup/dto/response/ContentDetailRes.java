package com.pawsitive.contentgroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ContentDetailRes {
    private int contentNo;
    private int contentCategoryNo;
    private String contentCategoryName;
    private String title;
    private String content;
    private String image;
}
