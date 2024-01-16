package com.ssafy.user.service;

import com.ssafy.user.dto.request.UserRegisterPostReq;
import com.ssafy.user.dto.request.UserUpdatePatchReq;
import com.ssafy.user.entity.User;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
    User createUser(UserRegisterPostReq userRegisterInfo);

    User getUserByUserId(String userId);

    User updateUser(String userId, UserUpdatePatchReq userUpdateInfo);

    void deleteUserByUserId(String userId);
}
