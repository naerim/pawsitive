package com.pawsitive.usergroup.dto.request;

//import io.swagger.annotations.ApiModel;
//import io.swagger.annotations.ApiModelProperty;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 회원가입 API ([POST] /api/v1/users) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@Schema(description = "UserRegisterPostRequest")
public class UserJoinPostReq {

    @Schema(name = "email", example = "ssafy_web@ssafy.com")
    private String email;

    @Schema(name = "name", example = "김싸피")
    private String name;

    @Schema(name = "pw", example = "your_password")
    private String pw;

    @Schema(name = "address", example = "서울특별시 광진구 능동로 120")
    private String address;

    @Schema(name = "role", example = "USER 또는 SHELTER")
    private String role;

    @Schema(name = "birth", example = "1998-04-21")
    private String birth;

    @Schema(name = "type", example = "1")
    private int type;

    @Schema(name = "gender", example = "M/F")
    private char gender;

}
