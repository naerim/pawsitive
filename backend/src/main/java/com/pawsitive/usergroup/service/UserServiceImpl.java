package com.pawsitive.usergroup.service;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.auth.jwt.JwtTokenProvider;
import com.pawsitive.usergroup.dto.request.UserJoinPostReq;
import com.pawsitive.usergroup.dto.request.UserTypeStagePatchReq;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.exception.UserNotFoundException;
import com.pawsitive.usergroup.repository.MemberRepository;
import com.pawsitive.usergroup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final MemberRepository memberRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public JwtToken signIn(String userEmail, String password) {
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(userEmail, password);

        Authentication authentication =
            authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        return jwtTokenProvider.generateToken(authentication);
    }

    @Transactional
    @Override
    public User joinUser(UserJoinPostReq userJoinPostReq) throws IllegalArgumentException {

        // 이미 등록된 유저라면 예외 던지기
        if (!userRepository.findUserByEmail(userJoinPostReq.getEmail()).isEmpty()) {
            throw new IllegalArgumentException("이미 등록된 사용자 아이디입니다.");
        }

        // 비밀번호 암호화
        String encryptedPassword = passwordEncoder.encode(userJoinPostReq.getPassword());

        return userRepository.save(User.builder()
            .email(userJoinPostReq.getEmail())
            .password(encryptedPassword)
            .name(userJoinPostReq.getName())
            .address(userJoinPostReq.getAddress())
            .role(userJoinPostReq.getRole())
            .build());

    }

    @Override
    public User getUserByUserNo(int userNo) {
        // 디비에 유저 정보 조회 (userId 를 통한 조회).
        return userRepository.findUserByUserNo(userNo).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public void updateField(UserTypeStagePatchReq req, int userNo) {

        Member member =
            memberRepository.findMemberByMemberNo(userNo).orElseThrow(UserNotFoundException::new);

        if ("type".equals(req.getField())) {
            // TODO 나중에
            member.setType(Integer.parseInt(req.getValue()));
        }
        if ("stage".equals(req.getField())) {
            member.setStage(member.getStage() + 1);
        }
        memberRepository.save(member);

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
