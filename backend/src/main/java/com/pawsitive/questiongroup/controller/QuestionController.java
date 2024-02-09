package com.pawsitive.questiongroup.controller;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.questiongroup.dto.request.QuestionCreateReq;
import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
import com.pawsitive.questiongroup.dto.response.QuestionDetailRes;
import com.pawsitive.questiongroup.service.AnswerService;
import com.pawsitive.questiongroup.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "10.Question")
@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final AnswerService answerService;

    @GetMapping("/today/users/{userNo}")
    @Operation(summary = "등록할 오늘의 질문 상세 조회",
        description = "등록할 오늘의 질문을 <strong>회원 고유번호</strong>로 <strong>상세 조회</strong> 한다.",
        tags = {"10.Question"},
        responses = {
            @ApiResponse(responseCode = "200", description = "회원이 등록해야 할 질문 내용을 정상적으로 반환한다."),
        }
    )
    public ResponseEntity<QuestionDetailRes> getQuestion(@PathVariable int userNo) {
        return ResponseEntity
            .status(OK)
            .body(questionService.getQuestionDetailByUserNo(userNo));
    }

    @GetMapping("/users/{userNo}")
    @Operation(summary = "등록한 오늘의 질문 전체 조회",
        description = "등록한 오늘의 질문을 <strong>회원 고유번호</strong>로 <strong>전체 조회</strong> 한다.",
        tags = {"10.Question"},
        responses = {
            @ApiResponse(responseCode = "200", description = "회원이 등록한 질문 리스트를 정상적으로 반환한다."),
        }
    )
    public ResponseEntity<List<AnswerDetailRes>> getQuestionList(@PathVariable int userNo) {
        return ResponseEntity
            .status(OK)
            .body(answerService.getQuestionListByUserNo(userNo));
    }

    @PostMapping("/users/{userNo}")
    @Operation(summary = "오늘의 질문 답변 등록",
        description = "<strong>회원 고유번호</strong>로 <strong>오늘의 질문 답변을 등록</strong> 한다.",
        tags = {"10.Question"},
        responses = {
            @ApiResponse(responseCode = "201", description = "회원이 입력한 질문에 대한 답변 내용을 정상적으로 등록한다."),
        }
    )
    public ResponseEntity<AnswerDetailRes> createQuestion(@PathVariable int userNo,
                                                          @RequestBody QuestionCreateReq req) {
        return ResponseEntity
            .status(CREATED)
            .body(answerService.createQuestionAnswer(userNo, req));
    }

    @GetMapping("{questionNo}/users/{userNo}")
    @Operation(summary = "등록한 질문 상세 조회",
        description = "등록한 질문을 <strong>질문 고유번호와 회원 고유번호</strong>로 <strong>상세 조회</strong> 한다.",
        tags = {"10.Question"},
        responses = {
            @ApiResponse(responseCode = "200", description = "회원이 등록한 질문과 답변 내용을 정상적으로 반환한다."),
        }
    )
    public ResponseEntity<AnswerDetailRes> getQuestionAnswer(@PathVariable int questionNo,
                                                             @PathVariable int userNo) {
        return ResponseEntity
            .status(OK)
            .body(answerService.getQuestionAnswer(questionNo, userNo));
    }

}
