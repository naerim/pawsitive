package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.usergroup.dto.request.UserJoinPostReq;
import com.pawsitive.usergroup.entity.User;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {

    JwtToken signIn(String userName, String password);

    User joinUser(UserJoinPostReq userJoinPostReq);

    //    private final UserRepository userRepository;
    //    private final PasswordEncoder passwordEncoder;
    //    private final RestTemplate restTemplate = new RestTemplate();
    //
    //    @Override
    //    @Transactional
    //    public User createUser(UserRegisterPostReq userRegisterInfo) {
    //        User user = new User();
    //        user.setUserId(userRegisterInfo.getId());
    //        // 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
    //        user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
    //        return userRepository.save(user);
    //    }
    //
    User getUserByUserNo(int userNo);

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
