package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.usergroup.dto.request.UserJoinPostReq;
import com.pawsitive.usergroup.dto.request.UserTypeStagePatchReq;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.User;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스를 정의한 인터페이스 입니다.
 *
 * @author 천세진, 이하늬
 * @since 1.0
 */
public interface UserService {

    JwtToken signIn(String userName, String password);

    User joinUser(UserJoinPostReq userJoinPostReq);

    User getUserByUserNo(int userNo);

    Member getMemberByUserNo(int userNo);

    void updateField(UserTypeStagePatchReq req, int userNo);

}
