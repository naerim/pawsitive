package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.usergroup.dto.request.UserJoinPostReq;
import com.pawsitive.usergroup.dto.request.UserTypeStagePatchReq;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.User;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {

    JwtToken signIn(String userName, String password);

    User joinUser(UserJoinPostReq userJoinPostReq);

    User getUserByUserNo(int userNo);

    Member getMemberByUserNo(int userNo);

    void updateField(UserTypeStagePatchReq req, int userNo);

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
