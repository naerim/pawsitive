package com.pawsitive.usergroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.auth.jwt.JwtToken;
import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.doggroup.dto.response.AdoptedDogRes;
import com.pawsitive.doggroup.service.AdoptDogService;
import com.pawsitive.usergroup.dto.request.AdoptionReq;
import com.pawsitive.usergroup.dto.request.SilentRefreshReq;
import com.pawsitive.usergroup.dto.request.UserTypeStagePatchReq;
import com.pawsitive.usergroup.dto.response.AdoptionRes;
import com.pawsitive.usergroup.dto.response.UpdateFieldRes;
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

    /**
     * 현재 로그인한 회원의 반려견을 조회하는 컨트롤러 메서드입니다.
     *
     * @param userId 유저 ID
     * @return 반려견 정보 응답 객체
     */
    @GetMapping("recommendation/{userId}")
    @Operation(summary = "로그인 한 회원의 입양한 유기견 조회",
        description = "<strong>로그인 한 회원이 입양한 유기견</strong>을 조회한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "로그인 한 회원의 입양한 유기견 조회에 성공하였습니다."),
            @ApiResponse(responseCode = "401", description = "현재 로그인 한 회원의 계정이 유효하지 않습니다."),
        }
    )
    public ResponseEntity<AdoptedDogRes> getDogsByUser(@PathVariable String userId) {

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

    /**
     * User 인증 필터 테스트용 메서드입니다.
     *
     * @return OK 응답객체
     */
    @GetMapping("/me")
    @Operation(summary = "로그인 체크",
        description = "현재 회원이 로그인되어 있는지 체크한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "유저가 로그인 되어있음"),
            @ApiResponse(responseCode = "401", description = "로그인 되어있지 않음 (권한 없음)")
        }
    )
    public ResponseEntity<BaseResponseBody> me() {
        return ResponseEntity
            .status(OK)
            .body(new BaseResponseBody(OK, "이 유저는 로그인 되어 있습니다."));
    }

    /**
     * 유저 정보를 수정하는 컨트롤러 메서드입니다.
     *
     * @param userNo 유저 고유번호
     * @param req    수정할 값을 가지고 있는 요청 DTO 객체
     * @return OK 응답객체
     */
    @PostMapping("/update")
    @Operation(summary = "유저 정보 수정하기",
        description = "로그인한 회원의 정보를 수정한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 수정 성공"),
            @ApiResponse(responseCode = "401", description = "현재 로그인 한 회원의 계정이 유효하지 않습니다."),
        }
    )
    public ResponseEntity<UpdateFieldRes> updateField(@RequestBody UserTypeStagePatchReq req) {
        return ResponseEntity
            .status(OK)
            .body(userService.updateField(req));
    }

    /**
     * 현재 로그인한 회원의 반려견을 조회하는 컨트롤러 메서드입니다.
     *
     * @param userNo 유저 번호
     * @return 반려견 정보 응답 객체
     */
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

    /**
     * 리프레시 토큰을 갱신하는 컨트롤러 메서드입니다.
     *
     * @param req            이메일, refreshToken을 가진 요청 DTO 객체
     * @param authentication 인증 객체
     * @return 재발급된 JWT 토큰 객체
     */
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

    /**
     * 로그인한 유저가 로그아웃 하는 컨트롤러 메서드입니다.
     *
     * @param email 유저 이메일
     * @return OK 응답 객체
     */
    @PostMapping("/logout")
    @Operation(
        summary = "로그아웃",
        description = "현재 로그인한 유저를 로그아웃 처리 한다.",
        tags = {"03.User"},
        responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "권한 없음"),
            @ApiResponse(responseCode = "404", description = "로그아웃 오류 (로그인 데이터 없음)"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
        }
    )
    public ResponseEntity<BaseResponseBody> logout(@RequestBody String email) {
        userService.signOut(email);
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "로그아웃 완료"));
    }
    
//    @PostMapping("/adopt")
//    public ResponseEntity<AdoptionRes> adoptDog(@RequestBody AdoptionReq req) {
//
//
//        return
//    }

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
