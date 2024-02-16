package com.pawsitive.usergroup.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UpdateFieldRes {

    private int userNo;

    private String field;

    private Integer value;

}
