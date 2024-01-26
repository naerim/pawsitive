package com.pawsitive.contentgroup.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ContentRes {
    private int contentNo;
    private String contentCategoryName;
    private String title;
    private String content;
    private String photo;
}
