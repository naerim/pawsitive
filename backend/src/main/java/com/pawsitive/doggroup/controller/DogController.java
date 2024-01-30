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
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
            @ApiResponse(responseCode = "200", description = "유기견 등록 성공"),
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
        }
    )
    public ResponseEntity<DogDetailRes> getDogByDogNo(@PathVariable int dogNo) {

        return ResponseEntity
            .status(OK)
            .body(dogService.getDogByDogNo(dogNo));
    }
//
//    @GetMapping("/recommend/{userId}")
//    @Operation(summary = "추천 강아지 조회", description = "사용자 ID에 해당하는 추천 강아지 정보를 반환합니다.",
//        tags = {"04.Dog"},
//        responses = {
//            @ApiResponse(responseCode = "200", description = "해당 강아지 번호에 해당하는 강아지 정보가 있음")
//        }
//    )
//    public ResponseEntity<DogDetailRes> getRecommendDog(@PathVariable String userId) {
//
//        DogDetailRes dogDetailRes = DogDetailRes.builder()
//            .neutralized("중성화")
//            .shelter("송파동물보호소")
//            .description("배에 피부병 (습진) 있습니다.")
//            .name("참이")
//            .build();
//
//        return ResponseEntity
//            .status(OK)
//            .body(dogDetailRes);
//    }


}
