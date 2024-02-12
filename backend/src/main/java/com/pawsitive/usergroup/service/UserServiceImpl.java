package com.pawsitive.usergroup.service;

import com.pawsitive.auth.Role;
import com.pawsitive.auth.exception.JwtAuthenticationProcessingException;
import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.auth.jwt.JwtTokenProvider;
import com.pawsitive.auth.service.MailService;
import com.pawsitive.common.exception.NotFoundException;
import com.pawsitive.common.exception.NotSavedException;
import com.pawsitive.common.service.RedisService;
import com.pawsitive.usergroup.dto.request.*;
import com.pawsitive.usergroup.dto.response.*;
import com.pawsitive.usergroup.entity.AdoptionSurvey;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.MemberDogMatrix;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.exception.InvalidPasswordException;
import com.pawsitive.usergroup.exception.UserNotFoundException;
import com.pawsitive.usergroup.repository.AdoptionSurveyRepository;
import com.pawsitive.usergroup.repository.MemberDogMatrixRepository;
import com.pawsitive.usergroup.repository.MemberRepository;
import com.pawsitive.usergroup.repository.UserRepository;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

import com.pawsitive.usergroup.transfer.AdoptionSurveyTransfer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
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
    private final MemberDogMatrixRepository memberDogMatrixRepository;
    private final AdoptionSurveyRepository adoptionSurveyRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    private final MailService mailService;

    @Value("${spring.mail.auth-code-expiration-millis}")
    private long authCodeExpirationMillis;

    private final RedisService redisService;

    private final String AUTH_CODE_PREFIX = "Authcode ";
    private final String REFRESH_TOKEN_PREFIX = "RefreshToken ";

    @Transactional
    @Override
    public UserLoginRes signIn(UserLoginPostReq req) {
        // Email에 해당하는 유저 정보를 가져오기 (없다면 예외 발생)
        User user =
            userRepository.findUserByEmail(req.getId()).orElseThrow(UserNotFoundException::new);

        // 비밀번호 일치 여부 확인 (일치하지 않으면 예외 발생)
        if (!passwordEncoder.matches(req.getPassword(), user.getPw())) {
            throw new InvalidPasswordException();
        }

        // Authentication 객체 생성
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(req.getId(), req.getPassword());

        // 인증 후 인증객체 가져오기
        Authentication authentication =
            authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // JWT 토큰 발급
        JwtToken jwtToken = jwtTokenProvider.generateToken(authentication);

        // Redis에 Refresh Token 값을 저장하기 (기존 값이 있으면 지우고 저장)
        // ( key = "RefreshToken " + Email / value = refreshToken / Duration = 24시간 )
        String jwtRedisKey = REFRESH_TOKEN_PREFIX + req.getId();

        if (redisService.checkExistsValue(jwtRedisKey)) {
            redisService.deleteValues(jwtRedisKey);
        }

        redisService.setValues(jwtRedisKey, jwtToken.getRefreshToken(), Duration.ofHours(24));

        // 개인회원인지 체크하기
        Optional<Member> memberOptional = memberRepository.findMemberByUserNo(user.getUserNo());

        // 개인회원이라면 Response DTO에 개인정보까지 포함해서 반환
        if (memberOptional.isPresent()) {
            Member member = memberOptional.get();

            return UserLoginRes.builder()
                .jwtToken(jwtToken)
                .userNo(user.getUserNo())
                .email(user.getEmail())
                .name(user.getName())
                .address(user.getAddress())
                .role(user.getRole().getTitle())
                .birth(member.getBirth().toString())
                .stage(member.getStage())
                .type(member.getType())
                .gender(member.getGender())
                .build();
        }

        return UserLoginRes.builder()
            .jwtToken(jwtToken)
            .userNo(user.getUserNo())
            .email(user.getEmail())
            .name(user.getName())
            .address(user.getAddress())
            .role(user.getRole().getTitle())
            .build();
    }

    @Transactional
    @Override
    public void signOut(String email) {
        String jwtRedisKey = REFRESH_TOKEN_PREFIX + email;
        if (redisService.checkExistsValue(jwtRedisKey)) {
            redisService.deleteValues(jwtRedisKey);
            return;
        }

        throw new NotFoundException("refreshToken");
    }

    @Transactional
    @Override
    public UserJoinRes joinUser(UserJoinPostReq userJoinPostReq) throws IllegalArgumentException {

        // 이미 등록된 유저라면 예외 던지기
        if (userRepository.findUserByEmail(userJoinPostReq.getEmail()).isPresent()) {
            throw new IllegalArgumentException("이미 등록된 사용자 아이디입니다.");
        }

        // 비밀번호 암호화
        String encryptedPassword = passwordEncoder.encode(userJoinPostReq.getPw());

        // 유저인지
        String role = userJoinPostReq.getRole();

        if ("USER".equals(role)) { // User일 때

            User user = userRepository.save(User.builder()
                .email(userJoinPostReq.getEmail())
                .name(userJoinPostReq.getName())
                .pw(encryptedPassword)
                .address(userJoinPostReq.getAddress())
                .role(Role.valueOf(userJoinPostReq.getRole()))
                .build());

            Member member = memberRepository.save(Member.builder()
                .userNo(user.getUserNo())
                .birth(LocalDateTime.parse(userJoinPostReq.getBirth() + "T00:00:00"))
                .stage(0)
                .type(userJoinPostReq.getType())
                .gender(userJoinPostReq.getGender())
                .build());

            log.info("UserServiceImpl : userNo = {}", user.getUserNo());

            // 회원가입 시 행렬평균 테이블도 같이 생성해서 추가하기
            memberDogMatrixRepository.save(MemberDogMatrix.builder().userNo(user.getUserNo()).build());

            return UserJoinRes.builder()
                .userNo(user.getUserNo())
                .email(user.getEmail())
                .name(user.getName())
                .address(user.getAddress())
                .role(user.getRole().getTitle())
                .birth(member.getBirth().toString())
                .stage(member.getStage())
                .type(member.getType())
                .gender(member.getGender())
                .build();
        }

        if ("SHELTER".equals(role)) {
            User user = userRepository.save(User.builder()
                .email(userJoinPostReq.getEmail())
                .name(userJoinPostReq.getName())
                .pw(encryptedPassword)
                .address(userJoinPostReq.getAddress())
                .role(Role.valueOf(userJoinPostReq.getRole()))
                .build());

            return UserJoinRes.builder()
                .email(user.getEmail())
                .name(user.getName())
                .address(user.getAddress())
                .role(user.getRole().getTitle())
                .build();
        }

        throw new NotSavedException();
    }

    @Override
    public User getUserByUserNo(int userNo) {
        return userRepository.findUserByUserNo(userNo)
            .orElseThrow(UserNotFoundException::new);
    }

    @Override
    public Member getMemberByUserNo(int userNo) {
        return memberRepository.findMemberByUserNo(userNo)
            .orElseThrow(UserNotFoundException::new);
    }

    @Transactional
    @Override
    public UpdateFieldRes updateField(UserTypeStagePatchReq req) {

        Member member = memberRepository.findMemberByUserNo(req.getUserNo())
            .orElseThrow(UserNotFoundException::new);

        if ("type".equals(req.getField())) {
            member.setType(req.getValue());
        }
        if ("stage".equals(req.getField())) {
            member.setStage(req.getValue());
        }

        Member savedMember = memberRepository.save(member);

        return UpdateFieldRes.builder()
            .userNo(savedMember.getUserNo())
            .field(req.getField())
            .value(req.getValue())
            .build();
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public void sendVerifyingEmail(String email) {
        if (userRepository.findUserByEmail(email).isPresent()) {
            throw new RuntimeException();
        }

        String title = "Pawsitive 회원가입 이메일 인증 번호입니다.";
        String authCode = createVerifyCode();
        mailService.sendEmail(email, title, authCode);

        // 이메일 인증 요청 시 인증 번호 Redis에 저장 ( key = "AuthCode " + Email / value = AuthCode )
        redisService.setValues(AUTH_CODE_PREFIX + email,
            authCode, Duration.ofMillis(this.authCodeExpirationMillis));
    }

    private String createVerifyCode() {
        try {
            Random random = SecureRandom.getInstanceStrong();
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < 6; i++) {
                builder.append(random.nextInt(10));
            }
            return builder.toString();
        } catch (NoSuchAlgorithmException e) {
            log.debug("MemberService.createCode() exception occur");
            throw new RuntimeException();
        }
    }

    public EmailVerificationRes verifyCode(EmailVerificationReq req) {
        String redisAuthCode = redisService.getValues(AUTH_CODE_PREFIX + req.getEmail());
        boolean authResult =
            redisService.checkExistsValue(redisAuthCode) && redisAuthCode.equals(req.getAuthCode());

        if (authResult) {
            redisService.deleteValues(AUTH_CODE_PREFIX + req.getEmail());
        }

        return EmailVerificationRes.builder()
            .email(req.getEmail())
            .result(authResult)
            .build();
    }

    @Transactional
    @Override
    public JwtToken reissueJwtToken(SilentRefreshReq req, Authentication authentication) {
        String jwtRedisKey = REFRESH_TOKEN_PREFIX + req.getEmail();

        if (!redisService.checkExistsValue(jwtRedisKey)) {
            throw new JwtAuthenticationProcessingException("없거나 만료된 RefreshToken 입니다.");
        }

        if (!redisService.getValues(jwtRedisKey).equals(req.getRefreshToken())) {
            throw new JwtAuthenticationProcessingException("refreshToken 값이 일치하지 않습니다.");
        }

        JwtToken newToken = jwtTokenProvider.generateToken(authentication);

        if (redisService.checkExistsValue(jwtRedisKey)) {
            redisService.deleteValues(jwtRedisKey);
        }
        redisService.setValues(jwtRedisKey, newToken.getRefreshToken(), Duration.ofHours(24));

        return newToken;
    }

    @Transactional
    @Override
    public UserSurveyRes createSurvey(UserSurveyReq req) {
        Optional<AdoptionSurvey> surveyOpt = adoptionSurveyRepository.getAdoptionSurveyByUserNo(req.getUserNo());
        AdoptionSurvey survey;

        if (surveyOpt.isPresent()) { // 조회 시 테이블에 값이 존재하면 setter로 값을 수정
            survey = surveyOpt.get();
            AdoptionSurveyTransfer.setEntityValues(survey, req);
        } else { // 없다면 엔티티 생성
            survey = AdoptionSurveyTransfer.dtoToEntity(req);
        }

        adoptionSurveyRepository.save(survey);

        return AdoptionSurveyTransfer.entityToDto(survey);
    }

    @Override
    public UserSurveyRes getSurvey(int userNo) {
        AdoptionSurvey survey = adoptionSurveyRepository.getAdoptionSurveyByUserNo(userNo).orElseThrow();

        return AdoptionSurveyTransfer.entityToDto(survey);
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
