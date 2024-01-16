package com.ssafy.db.repository;

import com.ssafy.db.entity.User;
import com.ssafy.dummy.UserDummy;
import java.util.Optional;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TestEntityManager entityManager;

    User dummyUser;

    @BeforeEach
    void setUp() {
        dummyUser = UserDummy.getUserSuccess();
        userRepository.save(dummyUser);

        entityManager.flush();
        entityManager.clear();
    }

    @Test
    @DisplayName("회원 아이디로 회원 조회 성공 테스트")
    void findByUserId() {
        Optional<User> user = userRepository.findUserByUserId(dummyUser.getUserId());

        Assertions.assertThat(user).isPresent();
        Assertions.assertThat(user.get().getUserId()).isEqualTo(dummyUser.getUserId());
    }
}