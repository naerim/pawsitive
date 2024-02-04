package com.pawsitive.auth.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.auth.service.MailService;
import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.usergroup.dto.request.EmailVerificationReq;
import com.pawsitive.usergroup.dto.request.UserJoinPostReq;
import com.pawsitive.usergroup.dto.request.UserLoginPostReq;
import com.pawsitive.usergroup.dto.response.EmailVerificationRes;
import com.pawsitive.usergroup.dto.response.UserJoinRes;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * 인증 관련 API 요청 처리를 위한 컨트롤러입니다.
 *
 * @author 천세진, 이하늬
 * @since 1.0
 */
@Tag(name = "02.Auth")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    /**
     * @param loginInfo 로그인 정보
     * @return 로그인 후 생성된 Token 정보
     */
    @PostMapping("/login")
    @Operation(
        summary = "로그인",
        description = "<strong>이메일과 패스워드</strong>를 통해 로그인 한다.",
        tags = {"02.Auth"},
        responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패 (JWT Access Token 만료)"),
            @ApiResponse(responseCode = "404", description = "사용자 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
        }
    )
    public ResponseEntity<JwtToken> login(@RequestBody UserLoginPostReq loginInfo) {

        String userId = loginInfo.getId();
        String password = loginInfo.getPassword();

        // JWT Token을 반환하기
        JwtToken userToken = userService.signIn(userId, password);

        return ResponseEntity
            .status(OK)
            .body(userToken);
    }

    @GetMapping("/email/verify")
    @Operation(
        summary = "인증 메일 요청",
        description = "해당 이메일로 인증 메일을 보낸다.",
        tags = {"02.Auth"},
        responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
        }
    )
    public ResponseEntity<BaseResponseBody> emailRequest(@RequestParam String email) {
        userService.sendVerifyingEmail(email);
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "이메일 요청 완료"));
    }

    @PostMapping("/email/verify")
    @Operation(
        summary = "인증 코드 검증",
        description = "해당 이메일로 보낸 인증 메일과 실제 사용자가 보낸 검증 값이 같은지 확인한다.",
        tags = {"02.Auth"},
        responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
        }
    )
    public ResponseEntity<EmailVerificationRes> verifyEmail(@RequestBody EmailVerificationReq req) {
        return ResponseEntity
            .status(OK)
            .body(userService.verifyCode(req));
    }


    /**
     * 회원가입을 처리하는 컨트롤러 메서드입니다.
     *
     * @param userJoinPostReq 회원가입 요청 객체
     * @return 유저 정보 클래스
     */
    @PostMapping("/join")
    @Operation(
        summary = "회원가입",
        description = "<strong>이메일, 패스워드, 보호소/유저 여부</strong>를 입력받아 회원가입을 한다.",
        tags = {"02.Auth"},
        responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "400", description = "실패")
        }
    )
    public ResponseEntity<UserJoinRes> join(@RequestBody UserJoinPostReq userJoinPostReq) {
        return ResponseEntity
            .status(OK)
            .body(userService.joinUser(userJoinPostReq));
    }

//    @PostMapping("/oauth2/google")
//    public ResponseEntity<UserLoginPostRes> doSocialLogin(@RequestBody
//                                                          UserGoogleLoginPostReq loginInfo) {
//        return ResponseEntity.status(OK)
//            .body(userService.doGoogleLogin(loginInfo));
//    }

//    @GetMapping("/oauth2/{registrationId}")
//    public void doSocialLogin(@RequestParam(required = false) String error,
//                              @RequestParam(required = false) String code,
//                              @PathVariable String registrationId) {
//        userService.doSocialLogin(code, registrationId);
//    }

}
