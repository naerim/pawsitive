package com.pawsitive.doggroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberDogLikeReq {
    private Integer userNo;
    private String email;
    private Integer dogNo;
}
