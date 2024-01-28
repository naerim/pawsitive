package com.pawsitive.auth.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.usergroup.dto.request.UserJoinPostReq;
import com.pawsitive.usergroup.dto.request.UserLoginPostReq;
import com.pawsitive.usergroup.dto.response.UserLoginPostRes;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 인증 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Tag(name = "02.Auth")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    /**
     * @param loginInfo
     * @return
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


        // 로그인 시도하려는 회원이 존재하지 않는 경우
//        if (Objects.isNull(user)) {
//            throw new UserNotFoundException();
//        }
//
//        // 로그인 요청한 유저로부터 입력된 패스워드 와 디비에 저장된 유저의 암호화된 패스워드가 같은지 확인.(유효한 패스워드인지 여부 확인)
//        if (passwordEncoder.matches(password, user.getPassword())) {
//            // 유효한 패스워드가 맞는 경우, 로그인 성공으로 응답.(액세스 토큰을 포함하여 응답값 전달)
//            return ResponseEntity.status(OK)
//                .body(UserLoginPostRes.of(OK, "Success", JwtTokenUtil.getToken(userId)));
//        }
//
//        // 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
//        throw new InvalidPasswordException();

        return ResponseEntity
            .status(OK)
            .body(userToken);

    }

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
    public ResponseEntity<User> join(@RequestBody UserJoinPostReq userJoinPostReq) {

        User joinUser = userService.joinUser(userJoinPostReq);

        return ResponseEntity
            .status(OK)
            .body(joinUser);

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
