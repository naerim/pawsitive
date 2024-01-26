package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {

    public JwtToken signIn(String userName, String password);

//    User createUser(UserRegisterPostReq userRegisterInfo);
//
//    User getUserByUserId(String userId);
//
//    User updateUser(String userId, UserUpdatePatchReq userUpdateInfo);
//
//    void deleteUserByUserId(String userId);
//
//    void doSocialLogin(String code, String registrationId);
    
}
