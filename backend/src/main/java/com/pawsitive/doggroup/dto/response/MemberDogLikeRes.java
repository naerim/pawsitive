package com.pawsitive.doggroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class MemberDogLikeRes {
    private Integer memberDogLikeNo;
    private Integer userNo;
    private Integer dogNo;
    private LocalDateTime createdAt;
    private Integer totalLikeCount;
}
