package com.pawsitive.contentgroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.contentgroup.dto.response.ContentDetailRes;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "05.Content")
@RestController
@RequestMapping("/api/v1/content")
@RequiredArgsConstructor
public class ContentController {

    @GetMapping("/detail/{contentNo}")
    @Operation(summary = "컨텐츠 상세 조회",
        description = "전달받은 컨텐츠 번호에 대한 상세 조회",
        tags = {"05.Content"},
        responses = {
            @ApiResponse(responseCode = "200", description = "해당 번호 컨텐츠 반환"),
            @ApiResponse(responseCode = "400", description = "해당 번호에 해당하는 컨텐츠가 없음"),
        }
    )
    public ResponseEntity<ContentDetailRes> getContent(@PathVariable String contentNo) {

        ContentDetailRes contentDetailRes = ContentDetailRes.builder()
            .contentNo(1)
            .contentCategoryNo(1)
            .contentCategoryName("펫티켓")
            .content(
                "{\"description\": \"반려견과 동반하여 외출 시, 목줄·가슴줄(길이 2m 이내) 및 인식표 착용 필수!\", \"remarks\": \"목줄 미착용 시: (1차) 20만원, (2차) 30만원, (3차 이상) 50만원, 인식표 미착용 시: (1차) 5만원, (2차) 10만원, (3차 이상) 20만원\"}")
            .photo("https://image.utoimage.com/preview/cp872722/2021/08/202108022949_500.jpg")
            .build();


        return ResponseEntity
            .status(OK)
            .body(contentDetailRes);
    }

    @GetMapping("/list")
    @Operation(summary = "컨텐츠 전체 조회",
        description = "컨텐츠 전체 리스트 조회 (나중에 페이지네이션 추가할게용)",
        tags = {"05.Content"},
        responses = {
            @ApiResponse(responseCode = "200", description = "해당 번호 컨텐츠 반환"),
        }
    )
    public ResponseEntity<List<ContentDetailRes>> listContent() {

        List<ContentDetailRes> list = new ArrayList<>();
        list.add(ContentDetailRes.builder()
            .contentNo(1)
            .contentCategoryNo(1)
            .contentCategoryName("펫티켓")
            .content(
                "{\"description\": \"반려견과 동반하여 외출 시, 목줄·가슴줄(길이 2m 이내) 및 인식표 착용 필수!\", \"remarks\": \"목줄 미착용 시: (1차) 20만원, (2차) 30만원, (3차 이상) 50만원, 인식표 미착용 시: (1차) 5만원, (2차) 10만원, (3차 이상) 20만원\"}")
            .photo("https://image.utoimage.com/preview/cp872722/2021/08/202108022949_500.jpg")
            .build());

        list.add(ContentDetailRes.builder()
            .contentNo(2)
            .contentCategoryNo(1)
            .contentCategoryName("펫티켓")
            .content(
                "{\"description\": \"반려견과 동반하여 외출 시, 목줄·가슴줄(길이 2m 이내) 및 인식표 착용 필수!\", \"remarks\": \"목줄 미착용 시: (1차) 20만원, (2차) 30만원, (3차 이상) 50만원, 인식표 미착용 시: (1차) 5만원, (2차) 10만원, (3차 이상) 20만원\"}")
            .photo("https://image.utoimage.com/preview/cp872722/2021/08/202108022949_500.jpg")
            .build());

        list.add(ContentDetailRes.builder()
            .contentNo(3)
            .contentCategoryNo(1)
            .contentCategoryName("펫티켓")
            .content(
                "{\"description\": \"반려견과 동반하여 외출 시, 목줄·가슴줄(길이 2m 이내) 및 인식표 착용 필수!\", \"remarks\": \"목줄 미착용 시: (1차) 20만원, (2차) 30만원, (3차 이상) 50만원, 인식표 미착용 시: (1차) 5만원, (2차) 10만원, (3차 이상) 20만원\"}")
            .photo("https://image.utoimage.com/preview/cp872722/2021/08/202108022949_500.jpg")
            .build());

        list.add(ContentDetailRes.builder()
            .contentNo(4)
            .contentCategoryNo(1)
            .contentCategoryName("펫티켓")
            .content(
                "{\"description\": \"반려견과 동반하여 외출 시, 목줄·가슴줄(길이 2m 이내) 및 인식표 착용 필수!\", \"remarks\": \"목줄 미착용 시: (1차) 20만원, (2차) 30만원, (3차 이상) 50만원, 인식표 미착용 시: (1차) 5만원, (2차) 10만원, (3차 이상) 20만원\"}")
            .photo("https://image.utoimage.com/preview/cp872722/2021/08/202108022949_500.jpg")
            .build());

        return ResponseEntity
            .status(OK)
            .body(list);

    }

}
