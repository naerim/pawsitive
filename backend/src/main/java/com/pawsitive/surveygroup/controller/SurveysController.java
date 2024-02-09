package com.pawsitive.surveygroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.surveygroup.dto.request.SurveyReq;
import com.pawsitive.surveygroup.service.SurveysService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "11.Surveys")
@RestController
@RequestMapping("/api/v1/surveys")
@RequiredArgsConstructor
@Slf4j
public class SurveysController {

    private final SurveysService surveysService;

    /**
     * Survey를 저장하는 컨트롤러 메서드입니다.
     *
     * @param req 설문 값 DTO 요청 객체
     * @return OK
     */
    @PostMapping
    @Operation(summary = "설문 등록", description = "설문을 등록합니다.",
        tags = {"11.Surveys"},
        responses = {
            @ApiResponse(responseCode = "200", description = "유기견 등록 성공"),
            @ApiResponse(responseCode = "400", description = "등록 실패 : 올바르지 않은 설문 값"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<BaseResponseBody> createSurvey(@Valid @RequestBody SurveyReq req) {
        surveysService.createSurvey(req);
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "등록 성공"));
    }


}
