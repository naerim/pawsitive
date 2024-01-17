package com.pawsitive.user.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.pawsitive.conference.service.ConferenceHistoryService;
import com.pawsitive.conference.service.ConferenceService;
import com.pawsitive.user.dto.request.UserRegisterPostReq;
import com.pawsitive.user.dto.request.UserUpdatePatchReq;
import com.pawsitive.user.entity.User;
import com.pawsitive.user.exception.UserNotFoundException;
import com.pawsitive.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ConferenceService conferenceService;
    private final ConferenceHistoryService conferenceHistoryService;
    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    @Transactional
    public User createUser(UserRegisterPostReq userRegisterInfo) {
        User user = new User();
        user.setUserId(userRegisterInfo.getId());
        // 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
        user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User getUserByUserId(String userId) {
        // 디비에 유저 정보 조회 (userId 를 통한 조회).
        return userRepository.findUserByUserId(userId).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public User updateUser(String userId, UserUpdatePatchReq userUpdateInfo) {
        // 존재하지 않는 회원일경우 예외처리
        User user = userRepository.findUserByUserId(userId).orElseThrow(UserNotFoundException::new);

        user.setDepartment(userUpdateInfo.getDepartment());
        user.setName(userUpdateInfo.getName());
        user.setPosition(userUpdateInfo.getPosition());

        return userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteUserByUserId(String userId) {
        // 해당 유저가 생성한 방 모두 삭제
        conferenceService.deleteConferenceByUserId(userId);
        // 해당 유저의 지난 회의 이력 모두 삭제
        conferenceHistoryService.deleteConferenceHistoryUserId(userId);
        // 해당 유저 정보 삭제
        userRepository.deleteByUserId(userId);
    }

    @Override
    public void doSocialLogin(String code, String registrationId) {
        String accessToken = getAccessToken(code, registrationId);
        System.out.println("accessToken = " + accessToken);
    }

    private String getAccessToken(String authorizationCode, String registrationId) {
        String clientId =
            "322470637320-2hjcqg5sjrpdk499qlrapib2brr4ml9a.apps.googleusercontent.com";
        String clientSecret = "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";
        String redirectUri = "http://localhost:8080/api/v1/auth/oauth2/google";
        String tokenUri = "https://oauth2.googleapis.com/token";

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("code", authorizationCode);
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);
        params.add("redirect_uri", redirectUri);
        params.add("grant_type", "authorization_code");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity entity = new HttpEntity(params, headers);

        ResponseEntity<JsonNode> responseNode =
            restTemplate.exchange(tokenUri, HttpMethod.POST, entity, JsonNode.class);
        JsonNode accessTokenNode = responseNode.getBody();
        return accessTokenNode.get("access_token").asText();
    }

    private JsonNode getUserResource(String accessToken, String registrationId) {
        String resourceUri = "https://www.googleapis.com/oauth2/v2/userinfo";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);
        HttpEntity entity = new HttpEntity(headers);
        return restTemplate.exchange(resourceUri, HttpMethod.GET, entity, JsonNode.class).getBody();
    }
}
