package com.pawsitive.adoptgroup.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 회원 본인이 입양한 강아지 조회 API ([GET] /api/v1/users/{userId}/dogs) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "AdoptedDogResponse")
public class AdoptionDogRes {

    @Schema(description = "입양 번호 (PK)")
    private int adoptDogNo;

    @Schema(description = "유저 번호")
    private int userNo;

    @Schema(description = "강아지 고유 번호")
    private int dogNo;

    @Schema(description = "이름")
    private String name;

    @Schema(description = "입양일자 (DateTime)")
    private LocalDateTime createdAt;

    @Schema(description = "몸무게")
    private double weight;

    @Schema(description = "나이")
    private int age;

    @Schema(description = "입양한 날로부터의 일 수")
    private int adoptedDays;

    private String sex;

    private boolean isNeutralized;
    private String image;


}
