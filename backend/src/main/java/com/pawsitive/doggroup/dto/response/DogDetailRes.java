package com.pawsitive.doggroup.dto.response;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@Setter
@AllArgsConstructor
public class DogDetailRes {

    private int dogNo;
    private int userNo;
    private String userName;
    private String name;
    private String kind;
    private LocalDateTime createdAt;
    private boolean isNaturalized;
    private int age;
    private String color;
    private String video;
    private String note;
    private int hit;
    private String mbti;
    private boolean isAdopted;
    private List<String> images;

}
