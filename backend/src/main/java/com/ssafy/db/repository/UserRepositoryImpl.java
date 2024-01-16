package com.ssafy.db.repository;

import com.querydsl.jpa.JPQLQuery;
import com.ssafy.db.entity.QUser;
import com.ssafy.db.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 구현 정의.
 */

public class UserRepositoryImpl extends QuerydslRepositorySupport implements UserRepositoryCustom {

    public UserRepositoryImpl() {
        super(User.class);

    }

    public Optional<User> findUserByUserId(String userId) {
        QUser qUser = QUser.user;
        JPQLQuery<User> user = from(qUser).where(qUser.userId.eq(userId)).select(qUser);

        return Optional.ofNullable(user.fetchOne());
    }
}