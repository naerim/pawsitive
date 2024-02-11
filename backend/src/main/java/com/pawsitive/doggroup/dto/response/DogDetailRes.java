package com.pawsitive.doggroup.dto.response;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DogDetailRes {

    private int dogNo;
    private int userNo;
    private String userName;
    private String name;
    private String kind;
    private LocalDateTime createdAt;
    private boolean isNeutralized;
    private int age;
    private String note;
    private int hit;
    private String mbti;
    private int statusNo;
    private List<String> files;
    private String sex;
    private String address;
    private boolean userLiked;
    
}
