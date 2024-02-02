package com.pawsitive.dummy;

import com.pawsitive.usergroup.entity.User;

public class UserDummy {
    public static User getSuccessEntity() {

        User user = new User();
        user.setEmail("pawsitive@test.com");
        user.setName("pawsitive");
        user.setPassword("1234");
        user.setAddress("광주광역시");
        user.setRole("USER");
        return user;
    }
}
