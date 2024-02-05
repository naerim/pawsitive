package com.pawsitive.usergroup.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class SilentRefreshReq {

    private String email;
    private String refreshToken;

}
