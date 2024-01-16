package com.ssafy.common.model.response;

//import io.swagger.annotations.ApiModel;
//import io.swagger.annotations.ApiModelProperty;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

/**
 * 서버 요청에대한 기본 응답값(바디) 정의.
 */
@Getter
@Setter
@Schema(description = "BaseResponseBody")
public class BaseResponseBody {

    @Schema(name = "응답 메시지", example = "정상")
    String message = null;

    @Schema(name = "응답 코드", example = "200")
    Integer statusCode = null;

    public BaseResponseBody() {
    }

    public BaseResponseBody(HttpStatus statusCode) {
        this.statusCode = statusCode.value();
    }

    public BaseResponseBody(HttpStatus statusCode, String message) {
        this.statusCode = statusCode.value();
        this.message = message;
    }

    public static BaseResponseBody of(HttpStatus statusCode, String message) {
        BaseResponseBody body = new BaseResponseBody();
        body.message = message;
        body.statusCode = statusCode.value();
        return body;
    }

}
