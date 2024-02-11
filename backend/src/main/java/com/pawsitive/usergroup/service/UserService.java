package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.usergroup.dto.request.*;
import com.pawsitive.usergroup.dto.response.*;
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

    void signOut(String email);

    UserJoinRes joinUser(UserJoinPostReq userJoinPostReq);

    User getUserByUserNo(int userNo);

    Member getMemberByUserNo(int userNo);

    UpdateFieldRes updateField(UserTypeStagePatchReq req);

    User getUserByEmail(String email);

    void sendVerifyingEmail(String email);

    EmailVerificationRes verifyCode(EmailVerificationReq req);

    JwtToken reissueJwtToken(SilentRefreshReq req, Authentication authentication);

    UserSurveyRes createSurvey(UserSurveyReq req);

    UserSurveyRes getSurvey(int userNo);
    
}
