package com.pawsitive.adoptgroup.controller;

import static org.springframework.http.HttpStatus.OK;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "03.Shelter-Adoption", description = "보호소 입양 기능")
@RestController
@RequestMapping("/api/v1/shelter/adopt-dogs")
@RequiredArgsConstructor
@Slf4j
public class ShelterAdoptionController {

    private final UserService userService;
    private final ChatRoomService chatRoomService;
    private final AdoptDogService adoptDogService;

    @PutMapping("/appointment")
    @Operation(summary = "유기견 입양 약속 수락", description = "전달받은 유기견 번호와 회원 번호로 입양 약속을 수락한다", tags = {
        "03.Shelter-Adoption"}, responses = {
        @ApiResponse(responseCode = "200", description = "입양 약속 수락 여부를 정상 반환한다.")}
    )
    public ResponseEntity<BaseResponseBody> createdDogAppointment(
        @RequestBody AppointmentReq appointmentReq) {
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, chatRoomService.acceptAppointment(appointmentReq)));
    }


}
