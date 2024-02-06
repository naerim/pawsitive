package com.pawsitive.contentgroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import com.pawsitive.contentgroup.service.ContentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "05.Content")
@RestController
@RequestMapping("/api/v1/contents")
@RequiredArgsConstructor
public class ContentController {
    private final ContentService contentService;

    @GetMapping
    @Operation(summary = "컨텐츠 전체 조회",
        description = "컨텐츠 <strong>전체 조회</strong>를 한다. 파라미터로 카테고리 번호가 넘어온다면 <strong>카테고리별 컨텐츠 목록을 조회</strong> 한다.",
        tags = {"05.Content"},
        responses = {
            @ApiResponse(responseCode = "200", description = "전체 컨텐츠 목록 또는 카테고리에 해당되는 전체 컨텐츠 목록을 정상적으로 반환한다."),
        }
    )
    public ResponseEntity<Page<ContentDetailRes>> getContentList(Pageable pageable,
                                                                 @RequestParam(required = false)
                                                                 Integer categoryNo) {
        return ResponseEntity
            .status(OK)
            .body(contentService.getContentList(pageable, categoryNo));
    }

    @GetMapping("/{contentNo}")
    @Operation(summary = "컨텐츠 상세 조회",
        description = "컨텐츠를 <strong>컨텐츠 고유번호</strong>로 <strong>상세 조회</strong> 한다.",
        tags = {"05.Content"},
        responses = {
            @ApiResponse(responseCode = "200", description = "컨텐츠 고유번호에 해당되는 컨텐츠 세부사항을 정상적으로 반환한다."),
        }
    )
    public ResponseEntity<ContentDetailRes> getContent(@PathVariable int contentNo) {
        return ResponseEntity
            .status(OK)
            .body(contentService.getContent(contentNo));
    }


}
