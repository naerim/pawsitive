package com.pawsitive.usergroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.doggroup.dto.response.AdoptedDogRes;
import com.pawsitive.doggroup.service.AdoptDogService;
import com.pawsitive.usergroup.dto.request.SilentRefreshReq;
import com.pawsitive.usergroup.dto.request.UserTypeStagePatchReq;
import com.pawsitive.usergroup.exception.UserNotLoginException;
import com.pawsitive.usergroup.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Tag(name = "03.User")
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    private final AdoptDogService adoptDogService;

    @GetMapping("recommendation/{userId}")
    @Operation(summary = "로그인 한 회원의 입양한 유기견 조회",
        description = "<strong>로그인 한 회원이 입양한 유기견</strong>을 조회한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "로그인 한 회원의 입양한 유기견 조회에 성공하였습니다."),
            @ApiResponse(responseCode = "401", description = "현재 로그인 한 회원의 계정이 유효하지 않습니다."),
        }
    )
    public ResponseEntity<AdoptedDogRes> getDogsByUser(@PathVariable String userId,
                                                       Authentication authentication) {

        if (!userId.equals("admin")) {
            throw new UserNotLoginException();
        }

        AdoptedDogRes response = AdoptedDogRes.builder()
            .adoptedDays(290)
//            .answerCount(10)
//            .memoryCount(9)
            .build();

        return ResponseEntity
            .status(OK)
            .body(response);
    }

    @GetMapping("/me")
    public ResponseEntity<BaseResponseBody> myPage() {
        return ResponseEntity
            .status(OK)
            .body(new BaseResponseBody(OK, "성공"));
    }

    @PatchMapping("/{userNo}")
    @Operation(summary = "유저 정보 수정하기",
        description = "로그인한 회원의 정보를 수정한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 수정 성공"),
            @ApiResponse(responseCode = "401", description = "현재 로그인 한 회원의 계정이 유효하지 않습니다."),
        }
    )
    public ResponseEntity<BaseResponseBody> updateField(@PathVariable Integer userNo,
                                                        @RequestBody UserTypeStagePatchReq req) {

        userService.updateField(req, userNo);

        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "수정 완료"));
    }

    @GetMapping("/dogs/{userNo}")
    @Operation(summary = "로그인 한 회원의 입양한 유기견 조회",
        description = "<strong>로그인 한 회원이 입양한 유기견</strong>을 조회한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "로그인 한 회원의 입양한 유기견 조회에 성공하였습니다."),
            @ApiResponse(responseCode = "401", description = "현재 로그인 한 회원의 계정이 유효하지 않습니다."),
        }
    )
    public ResponseEntity<AdoptedDogRes> getAdoptedDogByUserNo(@PathVariable Integer userNo) {
        return ResponseEntity
            .status(OK)
            .body(adoptDogService.getAdoptedDogByUserNo(userNo));
    }

    @PostMapping("/silent-refresh")
    @Operation(
        summary = "JWT 토큰 재발급",
        description = "전달된 RefreshToken 값을 확인하여 JWT Token을 재발급한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "권한 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
        }
    )
    public ResponseEntity<JwtToken> silentRefresh(@RequestBody SilentRefreshReq req,
                                                  Authentication authentication) {
        log.info("userController : silent-refresh = {}", authentication.toString());

        return ResponseEntity
            .status(OK)
            .body(userService.reissueJwtToken(req, authentication));
    }

    public ResponseEntity<BaseResponseBody> logout(@RequestBody String email) {

        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "로그아웃 완료"));
    }

//    @PatchMapping("/{userId}")
//    public ResponseEntity<UserUpdateRes> modifyUser(@PathVariable String userId,
//                                                    @RequestBody UserUpdatePatchReq updateInfo,
//                                                    Authentication authentication) {
//
//        // 로그인 한 사용자가 아닐 경우
//        if (Objects.isNull(authentication.getDetails())) {
//            throw new UserNotLoginException();
//        }
//
//        // 회원 정보수정 성공했을 경우
//        userService.updateUser(userId, updateInfo);
//        return ResponseEntity
//            .status(OK)
//            .body(UserUpdateRes.of(OK, "Success"));
//    }
//
//    @DeleteMapping("/{userId}")
//    public ResponseEntity<UserCheckRes> deleteUser(@PathVariable String userId,
//                                                   Authentication authentication) {
//        // 로그인 한 사용자가 아닐 경우
//        if (Objects.isNull(authentication.getDetails())) {
//            throw new UserNotLoginException();
//        }
//
//        // 회원 탈퇴 성공했을 경우
//        userService.deleteUserByUserId(userId);
//        return ResponseEntity
//            .status(NO_CONTENT)
//            .body(UserCheckRes.of(NO_CONTENT, "Success"));
//    }

}
