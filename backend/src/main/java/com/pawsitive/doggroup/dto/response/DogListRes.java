package com.pawsitive.doggroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DogListRes {

    private int dogNo;
    private String name;
    private String kind;
    private boolean isNeutralized;
    private int age;
    private int statusNo;
    private String file;
    private String sex;
    private boolean userLiked;

}
