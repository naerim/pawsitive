package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.auth.jwt.JwtTokenProvider;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.exception.UserNotFoundException;
import com.pawsitive.usergroup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    @Override
    public JwtToken signIn(String userEmail, String password) {
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(userEmail, password);

        Authentication authentication =
            authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        return jwtTokenProvider.generateToken(authentication);
    }


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
    @Override
    public User getUserByUserNo(int userNo) {
        // 디비에 유저 정보 조회 (userId 를 통한 조회).
        return userRepository.findUserByUserNo(userNo).orElseThrow(UserNotFoundException::new);
    }
//
//    @Override
//    public User updateUser(String userId, UserUpdatePatchReq userUpdateInfo) {
//        // 존재하지 않는 회원일경우 예외처리
//        User user = userRepository.findUserByUserId(userId).orElseThrow(UserNotFoundException::new);
//
//        user.setDepartment(userUpdateInfo.getDepartment());
//        user.setName(userUpdateInfo.getName());
//        user.setPosition(userUpdateInfo.getPosition());
//
//        return userRepository.save(user);
//    }
//
//    @Override
//    @Transactional
//    public void deleteUserByUserId(String userId) {
//        // 해당 유저가 생성한 방 모두 삭제
//        conferenceService.deleteConferenceByUserId(userId);
//        // 해당 유저의 지난 회의 이력 모두 삭제
//        conferenceHistoryService.deleteConferenceHistoryUserId(userId);
//        // 해당 유저 정보 삭제
//        userRepository.deleteByUserId(userId);
//    }
//
//    @Override
//    public void doSocialLogin(String code, String registrationId) {
//        String accessToken = getAccessToken(code, registrationId);
//        System.out.println("accessToken = " + accessToken);
//    }
//
//    private String getAccessToken(String authorizationCode, String registrationId) {
//        String clientId =
//            "322470637320-2hjcqg5sjrpdk499qlrapib2brr4ml9a.apps.googleusercontent.com";
//        String clientSecret = "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";
//        String redirectUri = "http://localhost:8080/api/v1/auth/oauth2/google";
//        String tokenUri = "https://oauth2.googleapis.com/token";
//
//        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
//        params.add("code", authorizationCode);
//        params.add("client_id", clientId);
//        params.add("client_secret", clientSecret);
//        params.add("redirect_uri", redirectUri);
//        params.add("grant_type", "authorization_code");
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//
//        HttpEntity entity = new HttpEntity(params, headers);
//
//        ResponseEntity<JsonNode> responseNode =
//            restTemplate.exchange(tokenUri, HttpMethod.POST, entity, JsonNode.class);
//        JsonNode accessTokenNode = responseNode.getBody();
//        return accessTokenNode.get("access_token").asText();
//    }
//
//    private JsonNode getUserResource(String accessToken, String registrationId) {
//        String resourceUri = "https://www.googleapis.com/oauth2/v2/userinfo";
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("Authorization", "Bearer " + accessToken);
//        HttpEntity entity = new HttpEntity(headers);
//        return restTemplate.exchange(resourceUri, HttpMethod.GET, entity, JsonNode.class).getBody();
//    }

}
