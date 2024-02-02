package com.pawsitive.auth;

import com.pawsitive.usergroup.entity.User;
import java.util.Map;
import lombok.Builder;

@Builder
public class OAuthAttribute {

    private Map<String, Object> attributes;
    private String name;
    private String email;

    public User toEntity() {
        return User.builder()
            .name(name)
            .email(email)
            .role(Role.GUEST)
            .build();
    }

}
