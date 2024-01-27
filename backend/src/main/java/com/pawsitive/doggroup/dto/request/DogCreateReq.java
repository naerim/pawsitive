package com.pawsitive.doggroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author 이하늬
 * @since 1.0
 */
@Getter
@AllArgsConstructor
public class DogCreateReq {
    private int userNo;
    private String name;
    private String kind;
    private Boolean isNaturalized;
    private String color;
    private String note;
    private int eq;
    private int si;
    private int aw;
    private int fc;
    private MultipartFile video;
    private MultipartFile[] photoList;

}
