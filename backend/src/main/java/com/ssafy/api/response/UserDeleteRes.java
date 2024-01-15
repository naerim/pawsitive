package com.ssafy.api.response;

import com.ssafy.common.model.response.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

/**
 * 회원 탈퇴 성공 확인 API ([DELETE] /api/v1/users/${userId}) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Schema(description = "UserDeleteRes")
public class UserDeleteRes extends BaseResponseBody {

  public static UserDeleteRes of(HttpStatus status, String message) {
    UserDeleteRes res = new UserDeleteRes();
    res.setStatusCode(status.value());
    res.setMessage(message);
    return res;
  }
}
