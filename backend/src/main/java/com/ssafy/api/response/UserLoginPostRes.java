package com.ssafy.api.response;

import com.ssafy.common.model.response.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

/**
 * 유저 로그인 API ([POST] /api/v1/auth) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Schema(description = "UserLoginPostResponse")
public class UserLoginPostRes extends BaseResponseBody {

  @Schema(name = "JWT 인증 토큰", example = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN...")
  private String accessToken;

  public static UserLoginPostRes of(HttpStatus status, String message, String accessToken) {
    UserLoginPostRes res = new UserLoginPostRes();
    res.setStatusCode(status.value());
    res.setMessage(message);
    res.setAccessToken(accessToken);
    return res;
  }

}
