package com.pawsitive.doggroup.dto.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DogDetailRes {

    private int dogNo;
    private int userNo;
    private String name;
    private String kind;
    private LocalDateTime createdAt;
    private boolean isNaturalized;
    private String color;
    private String video;
    private String note;
    private int hit;
    private String mbti;
    private String[] photoList;
    private String video;

}
