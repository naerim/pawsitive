package com.pawsitive.contentgroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class ContentDetailRes {

    private int contentNo;
    private int contentCategoryNo;
    private String contentCategoryName;
    private String title;
    private String content;
    private String photo;

}
