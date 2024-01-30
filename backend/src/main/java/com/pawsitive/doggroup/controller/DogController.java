package com.pawsitive.doggroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.service.DogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "04.Dog")
@RestController
@RequestMapping("/api/v1/dogs")
@RequiredArgsConstructor
public class DogController {
    private final DogService dogService;

    @PostMapping
    @Operation(summary = "유기견 등록", description = "전달받은 입력 정보를 유기견 테이블에 등록합니다.",
        tags = {"04.Dog"},
        responses = {
            @ApiResponse(responseCode = "201", description = "유기견 등록 성공"),
            @ApiResponse(responseCode = "400", description = "유기견 등록에 필요한 정보가 유효하지 않음")
        }
    )
    public ResponseEntity<DogDetailRes> createDog(@Valid @RequestPart DogCreateReq req,
                                                  @RequestPart(required = false)
                                                  MultipartFile video,
                                                  @RequestPart(required = false)
                                                  MultipartFile[] images) throws Exception {

        Dog dog = dogService.createDog(req, video, images);

        return ResponseEntity
            .status(OK)
            .body(dogService.getDogByDogNo(dog.getDogNo()));
    }

    @GetMapping("/{dogNo}")
    @Operation(summary = "유기견 상세 조회", description = "전달받은 유기견 번호에 대한 상세 조회 정보를 반환합니다.",
        tags = {"04.Dog"},
        responses = {
            @ApiResponse(responseCode = "200", description = "유기견 고유 번호에 해당하는 강아지 상세 조회 성공"),
            @ApiResponse(responseCode = "400", description = "유기견 고유 번호에 해당하는 강아지가 없음"),
        }
    )
    public ResponseEntity<DogDetailRes> getDogByDogNo(@PathVariable int dogNo) {

        return ResponseEntity
            .status(OK)
            .body(dogService.getDogByDogNo(dogNo));
    }

    @GetMapping("/recommendation")
    @Operation(summary = "추천 강아지 조회", description = "<strong>유기견 목록을 파라미터로 전달 받은 조회할 갯수만큼 조회</strong> 한다.",
        tags = {"04.Dog"},
        responses = {
            @ApiResponse(responseCode = "200", description = "추천 강아지 목록을 정상적으로 반환한다."),
        }
    )
    public ResponseEntity<List<DogDetailRes>> getRecommendationDogList(@RequestParam int num) {

        return ResponseEntity
            .status(OK)
            .body(dogService.getRecommendationDogList(num));
    }


}
