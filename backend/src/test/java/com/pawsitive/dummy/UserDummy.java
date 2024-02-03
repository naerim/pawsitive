// TODO : UesrDummy 원상복구 시키기

package com.pawsitive.dummy;

import com.pawsitive.auth.Role;
import com.pawsitive.usergroup.entity.User;

public class UserDummy {
    public static User getSuccessEntity() {

        User user = new User();
        user.setEmail("pawsitive@test.com");
        user.setName("pawsitive");
        user.setPw("1234");
        user.setAddress("광주광역시");
        user.setRole(Role.USER);
        return user;
    }
}
