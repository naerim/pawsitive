package com.pawsitive.usergroup.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class EmailVerificationRes {

    private String email;

    private Boolean result;

}
