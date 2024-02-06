package com.pawsitive.usergroup.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

/**
 *
 */
@Getter
@Setter
public class UserTypeStagePatchReq {

    @Schema(name = "userNo", example = "유저 PK")
    private int userNo;

    @Schema(name = "field", example = "type 혹은 stage")
    private String field;

    @Schema(name = "value", example = "바꿀 값")
    private Integer value;

}
