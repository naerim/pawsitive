package com.pawsitive.adoptgroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.adoptgroup.dto.request.UpdateAdoptDogRes;
import com.pawsitive.adoptgroup.dto.response.AdoptionDogRes;
import com.pawsitive.adoptgroup.service.AdoptDogService;
import com.pawsitive.chatgroup.service.ChatRoomService;
import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.surveygroup.dto.request.AppointmentReq;
import com.pawsitive.usergroup.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "09.Member-Adoption")
@RestController
@RequestMapping("/api/v1/adopt-dogs")
@RequiredArgsConstructor
@Slf4j
public class MemberAdoptionController {

    private final UserService userService;
    private final ChatRoomService chatRoomService;
    private final AdoptDogService adoptDogService;


    /**
     * 회원의 반려견을 조회하는 컨트롤러 메서드입니다.
     *
     * @param userNo 유저 번호
     * @return 반려견 정보 응답 객체
     */
    @GetMapping("/users/{userNo}")
    @Operation(summary = "회원의 입양한 유기견 조회",
        description = "<strong>회원 고유 번호로 회원의 입양한 유기견</strong>을 조회한다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "로그인 한 회원의 입양한 유기견 조회에 성공하였습니다."),
            @ApiResponse(responseCode = "401", description = "현재 로그인 한 회원의 계정이 유효하지 않습니다."),
        }
    )
    public ResponseEntity<AdoptionDogRes> getAdoptedDogByUserNo(@PathVariable int userNo) {
        return ResponseEntity
            .status(OK)
            .body(adoptDogService.getAdoptedDogByUserNo(userNo));
    }

    @PutMapping("/appointment")
    @Operation(summary = "유기견 입양 약속 등록", description = "전달받은 유기견 번호와 회원 번호로 입양 약속을 등록한다",
        responses = {
            @ApiResponse(responseCode = "200", description = "입양 약속 등록 여부를 정상 반환한다.")
        })
    public ResponseEntity<BaseResponseBody> createdDogAppointment(
        @RequestBody AppointmentReq appointmentReq) {
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, chatRoomService.createAppointment(appointmentReq)));
    }

    @PutMapping("/{adoptDogNo}")
    @Operation(summary = "유기견 정보 수정", description = "전달받은 유기견 입양 번호로 유기견 정보를 수정한다",
        responses = {
            @ApiResponse(responseCode = "200", description = "반려견 정보 수정 여부를 정상 반환한다.")
        })
    public ResponseEntity<AdoptionDogRes> updateDogInformation(@PathVariable int adoptDogNo,
                                                               @RequestBody
                                                               UpdateAdoptDogRes updateAdoptDogRes) {
        return ResponseEntity
            .status(OK)
            .body(adoptDogService.updateInformation(adoptDogNo, updateAdoptDogRes));
    }

    @PostMapping("/form")
    public ResponseEntity<BaseResponseBody> submitForm() {
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "성공"));
    }


}
