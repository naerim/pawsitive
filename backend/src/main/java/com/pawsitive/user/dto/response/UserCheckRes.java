package com.pawsitive.user.dto.response;

import com.pawsitive.common.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

/**
 * 회원 존재 확인 API ([GET] /api/v1/users/${userId}) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Schema(description = "UserCheckRes")
public class UserCheckRes extends BaseResponseBody {

    public static UserCheckRes of(HttpStatus status, String message) {
        UserCheckRes res = new UserCheckRes();
        res.setStatusCode(status.value());
        res.setMessage(message);
        return res;
    }

}
