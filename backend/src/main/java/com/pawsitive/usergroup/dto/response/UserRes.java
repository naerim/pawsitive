package com.pawsitive.usergroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class UserRes {

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
