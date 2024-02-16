package com.pawsitive.contentgroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class ContentDetailRes {
    private int contentNo;
    private int contentCategoryNo;
    private String contentCategoryName;
    private String title;
    private String content;
    private String image;
}
