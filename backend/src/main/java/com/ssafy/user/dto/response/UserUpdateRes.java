package com.ssafy.user.dto.response;

import com.ssafy.api.response.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

/**
 * 유저 로그인 API ([PATCH] /api/v1/users/{userId}) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Schema(description = "UserUpdateRes")
public class UserUpdateRes extends BaseResponseBody {

    public static UserUpdateRes of(HttpStatus status, String message) {
        UserUpdateRes res = new UserUpdateRes();
        res.setStatusCode(status.value());
        res.setMessage(message);
        return res;
    }
}
