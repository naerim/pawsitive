package com.pawsitive.usergroup.dto.response;

import com.pawsitive.auth.jwt.JwtToken;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 로그인 API ([POST] /api/v1/auth) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Builder
@Schema(description = "User Login Response")
public class UserLoginRes {

    private JwtToken jwtToken;

    private int userNo;

    private String email;

    private String name;

    private String address;

    private String role;

    private String birth;

    private char gender;

    private int type;

    private int stage;

}
