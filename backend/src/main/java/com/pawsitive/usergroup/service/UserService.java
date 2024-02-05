package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.usergroup.dto.request.EmailVerificationReq;
import com.pawsitive.usergroup.dto.request.SilentRefreshReq;
import com.pawsitive.usergroup.dto.request.UserJoinPostReq;
import com.pawsitive.usergroup.dto.request.UserLoginPostReq;
import com.pawsitive.usergroup.dto.request.UserTypeStagePatchReq;
import com.pawsitive.usergroup.dto.response.EmailVerificationRes;
import com.pawsitive.usergroup.dto.response.UserJoinRes;
import com.pawsitive.usergroup.dto.response.UserLoginRes;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.User;
import org.springframework.security.core.Authentication;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스를 정의한 인터페이스 입니다.
 *
 * @author 천세진, 이하늬
 * @since 1.0
 */
public interface UserService {

    UserLoginRes signIn(UserLoginPostReq userLoginPostReq);

    UserJoinRes joinUser(UserJoinPostReq userJoinPostReq);

    User getUserByUserNo(int userNo);

    Member getMemberByUserNo(int userNo);

    void updateField(UserTypeStagePatchReq req, int userNo);

    User getUserByEmail(String email);

    void sendVerifyingEmail(String email);

    EmailVerificationRes verifyCode(EmailVerificationReq req);

    JwtToken reissueJwtToken(SilentRefreshReq req, Authentication authentication);

}
