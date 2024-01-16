package com.ssafy.db.repository;

import com.ssafy.db.entity.User;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface UserRepositoryCustom {
    Optional<User> findUserByUserId(String userId);

}
