package com.pawsitive.questiongroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.questiongroup.dto.QuestionDetailRes;
import com.pawsitive.questiongroup.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "08.Question")
@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;

    @GetMapping("/users/{userNo}")
    @Operation(summary = "등록해야 할 질문 상세 조회",
        description = "등록해야 할 질문을 <strong>회원 고유번호</strong>로 <strong>상세 조회</strong> 한다.",
        tags = {"08.Question"},
        responses = {
            @ApiResponse(responseCode = "200", description = "회원이 등록해야 할 질문 내용을 정상적으로 반환한다."),
        }
    )
    public ResponseEntity<QuestionDetailRes> getQuestion(@PathVariable int userNo) {
        return ResponseEntity
            .status(OK)
            .body(questionService.getQuestionDetailByUserNo(userNo));
    }


}
