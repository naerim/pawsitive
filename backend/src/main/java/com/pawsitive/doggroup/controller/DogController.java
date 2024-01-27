package com.pawsitive.doggroup.controller;

import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.service.DogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "04.Dog")
@RestController
@RequestMapping("/api/v1/dogs")
@RequiredArgsConstructor
public class DogController {
    private final DogService dogService;

    @GetMapping("/{dogNo}")
    @Operation(summary = "강아지 상세 조회", description = "전달받은 강아지 번호에 대한 상세 정보를 반환합니다.",
        tags = {"04.Dog"},
        responses = {
            @ApiResponse(responseCode = "200", description = "해당 강아지 번호에 해당하는 강아지 정보가 있음"),
            @ApiResponse(responseCode = "404", description = "해당 강아지 번호에 해당하는 강아지 정보가 없음")
        }
    )
    public ResponseEntity<DogDetailRes> getDogInfo(@PathVariable String dogNo) {

        DogDetailRes dogDetailRes = DogDetailRes.builder()
            .neutralized("중성화")
            .shelter("송파동물보호소")
            .description("배에 피부병 (습진) 있습니다.")
            .name("참이")
            .build();

        return ResponseEntity
            .status(OK)
            .body(dogDetailRes);
    }

    @GetMapping("/recommend/{userId}")
    @Operation(summary = "추천 강아지 조회", description = "사용자 ID에 해당하는 추천 강아지 정보를 반환합니다.",
        tags = {"04.Dog"},
        responses = {
            @ApiResponse(responseCode = "200", description = "해당 강아지 번호에 해당하는 강아지 정보가 있음")
        }
    )
    public ResponseEntity<DogDetailRes> getRecommendDog(@PathVariable String userId) {

        DogDetailRes dogDetailRes = DogDetailRes.builder()
            .neutralized("중성화")
            .shelter("송파동물보호소")
            .description("배에 피부병 (습진) 있습니다.")
            .name("참이")
            .build();

        return ResponseEntity
            .status(OK)
            .body(dogDetailRes);
    }


}
