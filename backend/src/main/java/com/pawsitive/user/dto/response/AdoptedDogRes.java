package com.pawsitive.user.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인이 입양한 강아지 조회 API ([GET] /api/v1/users/{userId}/dogs) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Builder
@Schema(description = "AdoptedDogResponse")
public class AdoptedDogRes {
    @Schema(description = "입양한 날로부터의 일 수")
    private int adoptedDays;
    @Schema(description = "답변 갯수")
    private int answerCount;
    @Schema(description = "추억 일기 갯수")
    private int memoryCount;
}
