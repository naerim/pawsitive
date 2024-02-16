package com.pawsitive.doggroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class MemberDogLikeRes {
    private Integer dogNo;
    private Long totalLikeCount;
}
