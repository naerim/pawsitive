package com.ssafy.user.controller;

import static org.springframework.http.HttpStatus.OK;

import com.ssafy.api.exception.user.InvalidPasswordException;
import com.ssafy.api.exception.user.UserNotFoundException;
import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.user.dto.request.UserLoginPostReq;
import com.ssafy.user.dto.response.UserLoginPostRes;
import com.ssafy.user.entity.User;
import com.ssafy.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.Objects;
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
    private final PasswordEncoder passwordEncoder;

    /**
     * @param loginInfo
     * @return
     */
    @PostMapping("/login")
    @Operation(summary = "로그인", description = "<strong>아이디와 패스워드</strong>를 통해 로그인 한다.", tags = {
        "02.Auth"}, responses = {
        @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = UserLoginPostRes.class))),
        @ApiResponse(responseCode = "401", description = "인증 실패", content = @Content(schema = @Schema(implementation = BaseResponseBody.class))),
        @ApiResponse(responseCode = "404", description = "사용자 없음", content = @Content(schema = @Schema(implementation = BaseResponseBody.class))),
        @ApiResponse(responseCode = "500", description = "서버 오류", content = @Content(schema = @Schema(implementation = BaseResponseBody.class)))})
    public ResponseEntity<UserLoginPostRes> login(@RequestBody UserLoginPostReq loginInfo) {

        String userId = loginInfo.getId();
        String password = loginInfo.getPassword();

        User user = userService.getUserByUserId(userId);

        // 로그인 시도하려는 회원이 존재하지 않는 경우
        if (Objects.isNull(user)) {
            throw new UserNotFoundException();
        }

        // 로그인 요청한 유저로부터 입력된 패스워드 와 디비에 저장된 유저의 암호화된 패스워드가 같은지 확인.(유효한 패스워드인지 여부 확인)
        if (passwordEncoder.matches(password, user.getPassword())) {
            // 유효한 패스워드가 맞는 경우, 로그인 성공으로 응답.(액세스 토큰을 포함하여 응답값 전달)
            return ResponseEntity.status(OK)
                .body(UserLoginPostRes.of(OK, "Success", JwtTokenUtil.getToken(userId)));
        }

        // 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
        throw new InvalidPasswordException();

    }
}
