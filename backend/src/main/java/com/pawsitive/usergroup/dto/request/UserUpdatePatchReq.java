package com.pawsitive.usergroup.dto.request;

//import io.swagger.annotations.ApiModel;
//import io.swagger.annotations.ApiModelProperty;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 회원수정 API ([PATCH] /api/v1/users/{userId}) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@Schema(description = "UserUpdatePatchReq")
public class UserUpdatePatchReq {

    @Schema(name = "부서", example = "인사팀")
    private String department;

    @Schema(name = "직책", example = "대리")
    private String position;

    @Schema(name = "이름", example = "김현지")
    private String name;
}
