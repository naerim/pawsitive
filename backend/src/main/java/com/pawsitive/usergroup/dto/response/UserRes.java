package com.pawsitive.usergroup.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Schema(description = "UserResponse")
public class UserRes {

    @Schema(name = "ID")
    @JsonProperty(value = "user_id")
    String userId;

    @Schema(name = "부서")
    private String department;

    @Schema(name = "직책")
    private String position;

    @Schema(name = "이름")
    private String name;
    
}
