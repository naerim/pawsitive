package com.ssafy.user.repository;

import com.ssafy.user.entity.User;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface UserRepositoryCustom {
    Optional<User> findUserByUserId(String userId);

}
