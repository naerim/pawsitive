package com.pawsitive.usergroup.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
public class EmailVerificationReq {

    private String email;
    private String authCode;
    
}
