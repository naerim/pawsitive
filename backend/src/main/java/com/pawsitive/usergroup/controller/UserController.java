//package com.pawsitive.usergroup.controller;
//
//import static org.springframework.http.HttpStatus.CREATED;
//import static org.springframework.http.HttpStatus.NO_CONTENT;
//import static org.springframework.http.HttpStatus.OK;
//
//import com.pawsitive.auth.CustomUserDetails;
//import com.pawsitive.common.dto.BaseResponseBody;
//import com.pawsitive.usergroup.dto.request.UserRegisterPostReq;
//import com.pawsitive.usergroup.dto.request.UserUpdatePatchReq;
//import com.pawsitive.usergroup.dto.response.AdoptedDogRes;
//import com.pawsitive.usergroup.dto.response.UserCheckRes;
//import com.pawsitive.usergroup.dto.response.UserRes;
//import com.pawsitive.usergroup.dto.response.UserUpdateRes;
//import com.pawsitive.usergroup.entity.User;
//import com.pawsitive.usergroup.exception.DuplicateIdException;
//import com.pawsitive.usergroup.exception.UserNotLoginException;
//import com.pawsitive.usergroup.service.UserService;
//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.responses.ApiResponse;
//import io.swagger.v3.oas.annotations.tags.Tag;
//import java.util.Objects;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PatchMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
///**
// * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
// */
//@Tag(name = "03.User")
//@RestController
//@RequestMapping("/api/v1/users")
//@RequiredArgsConstructor
//public class UserController {
//
//    private final UserService userService;
//
//    @PostMapping
//    @Operation(summary = "회원 가입", description = "<strong>아이디와 패스워드</strong>를 통해 회원가입 한다.",
//        tags = {"03.User"},
//        responses = {
//            @ApiResponse(responseCode = "200", description = "성공"),
//            @ApiResponse(responseCode = "401", description = "인증 실패"),
//            @ApiResponse(responseCode = "404", description = "사용자 없음"),
//            @ApiResponse(responseCode = "500", description = "서버 오류")
//        }
//    )
//    public ResponseEntity<? extends BaseResponseBody> register(
//        @RequestBody UserRegisterPostReq registerInfo) {
//
//        //임의로 리턴된 User 인스턴스. 현재 코드는 회원 가입 성공 여부만 판단하기 때문에 굳이 Insert 된 유저 정보를 응답하지 않음.
//        User user = userService.createUser(registerInfo);
//
//        return ResponseEntity
//            .status(CREATED)
//            .body(BaseResponseBody.of(CREATED, "Success"));
//    }
//
//    @GetMapping("/me")
//    @Operation(summary = "회원 본인 정보 조회", description = "로그인한 회원 본인의 정보를 응답한다.",
//        tags = {"03.User"},
//        responses = {
//            @ApiResponse(responseCode = "200", description = "성공"),
//            @ApiResponse(responseCode = "401", description = "인증 실패"),
//            @ApiResponse(responseCode = "404", description = "사용자 없음"),
//            @ApiResponse(responseCode = "500", description = "서버 오류")
//        }
//    )
//    public ResponseEntity<UserRes> getUserInfo(Authentication authentication) {
//        /**
//         * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
//         * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
//         */
//        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
//        String userId = userDetails.getUsername();
//        User user = userService.getUserByUserId(userId);
//
//        return ResponseEntity
//            .status(OK)
//            .body(UserRes.of(user));
//    }
//
//    @GetMapping("/{userId}")
//    @Operation(summary = "아이디 중복 체크", description = "<strong>아이디</strong>가 현재 존재하는지 확인한다.",
//        tags = {"03.User"},
//        responses = {
//            @ApiResponse(responseCode = "200", description = "해당 ID가 존재하지 않음"),
//            @ApiResponse(responseCode = "409", description = "이미 존재하는 ID"),
//        }
//    )
//    public ResponseEntity<UserCheckRes> checkExistUser(@PathVariable String userId,
//                                                       Authentication authentication) {
//        User user = userService.getUserByUserId(userId);
//
//        // 로그인 한 사용자일 경우
//        // TODO: 여기 어떻게 응답할지 세진이랑 논의해서 결정할 것
////    if (Objects.nonNull(authentication.getDetails())) {
////      return null;
////    }
//
//        // 존재하는 회원일 경우
//        if (Objects.nonNull(user)) {
//            throw new DuplicateIdException();
//        }
//
//        return ResponseEntity
//            .status(OK)
//            .build();
//    }
//
//    @GetMapping("/{userId}/dogs")
//    @Operation(summary = "로그인 한 회원의 입양한 유기견 조회",
//        description = "<strong>로그인 한 회원이 입양한 유기견</strong>을 조회한다.",
//        tags = {"03.User"},
//        responses = {
//            @ApiResponse(responseCode = "200", description = "로그인 한 회원의 입양한 유기견 조회에 성공하였습니다."),
//            @ApiResponse(responseCode = "401", description = "현재 로그인 한 회원의 계정이 유효하지 않습니다."),
//        }
//    )
//    public ResponseEntity<AdoptedDogRes> getDogsByUser(@PathVariable String userId,
//                                                       Authentication authentication) {
//
//        if (!userId.equals("admin")) {
//            throw new UserNotLoginException();
//        }
//
//        AdoptedDogRes response = AdoptedDogRes.builder()
//            .adoptedDays(290)
//            .answerCount(10)
//            .memoryCount(9)
//            .build();
//
//        return ResponseEntity
//            .status(OK)
//            .body(response);
//    }
//
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
//
//}
