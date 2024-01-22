package com.pawsitive.user.repository;

import com.pawsitive.user.entity.User;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface UserRepositoryCustom {
    Optional<User> findUserByUserId(String userId);

}
