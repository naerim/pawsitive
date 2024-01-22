package com.pawsitive.dummy;

import com.pawsitive.user.entity.User;

public class UserDummy {
    public static User getUserSuccess() {

        User user = new User();

        user.setUserId("ssafy");
        user.setDepartment("11");
        user.setName("pawsitive");
        user.setPassword("ssafy");
        user.setPosition("부장");

        return user;
    }
}
