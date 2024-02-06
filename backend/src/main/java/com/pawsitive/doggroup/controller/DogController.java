package com.pawsitive.doggroup.controller;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.common.dto.response.PageResponse;
import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.service.DogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
@Slf4j
public class DogController {
    private final DogService dogService;

    @PostMapping
    @Operation(summary = "유기견 등록", description = "전달받은 입력 정보를 유기견 테이블에 등록합니다.",
        tags = {"04.Dog"},
        responses = {
            @ApiResponse(responseCode = "201", description = "유기견 등록 성공"),
            @ApiResponse(responseCode = "400", description = "유기견 등록에 필요한 정보가 유효하지 않음")
        })
    public ResponseEntity<DogDetailRes> createDog(@Valid @RequestPart DogCreateReq req,
                                                  @RequestPart(required = false)
                                                  MultipartFile video,
                                                  @RequestPart(required = false)
                                                  MultipartFile[] images) {
        return ResponseEntity.status(CREATED).body(dogService.createDog(req, video, images));
    }

    @GetMapping("/{dogNo}")
    @Operation(summary = "유기견 상세 조회", description = "전달받은 유기견 번호에 대한 상세 조회 정보를 반환합니다.", tags = {
        "04.Dog"}, responses = {
        @ApiResponse(responseCode = "200", description = "유기견 고유 번호에 해당하는 강아지 상세 조회 성공"),
        @ApiResponse(responseCode = "400", description = "유기견 고유 번호에 해당하는 강아지가 없음"),})
    public ResponseEntity<DogDetailRes> getDogByDogNo(@PathVariable int dogNo) {

        return ResponseEntity.status(OK).body(dogService.getDogByDogNo(dogNo));
    }

    @GetMapping("/recommendation")
    @Operation(summary = "추천 강아지 조회", description = "전달받은 페이지에 해당하는 <strong>유기견 목록</strong>을 반환한다.", tags = {
        "04.Dog"}, responses = {
        @ApiResponse(responseCode = "200", description = "추천 강아지 목록을 정상적으로 반환한다."),
        @ApiResponse(responseCode = "400", description = "전달받은 페이지 값에 해당하는 추천 강아지가 없음.")})
    public ResponseEntity<List<DogListRes>> getRecommendationDogList(
        @RequestParam(required = false) Integer num) {

        return ResponseEntity.status(OK).body(dogService.getRecommendationDogList(num));
    }


    @GetMapping
    @Operation(summary = "유기견 공고 전체 조회", description = "전달받은 페이지 번호에 해당하는 유기견 공고를 반환한다. 유기견 품종 입력 시 품종별 유기견 조회를 한다.", tags = {
        "04.Dog"}, responses = {
        @ApiResponse(responseCode = "200", description = "해당하는 페이지의 유기견 공고 목록을 정상적으로 반환한다."),
        @ApiResponse(responseCode = "400", description = "해당 페이지에 유기견 공고가 없음.")}

    )
    public ResponseEntity<PageResponse<DogListRes>> getDogList(Pageable pageable,
                                                               @RequestParam(required = false)
                                                               String kind) {
        Page<DogListRes> dogPage = dogService.getDogList(pageable, kind);

        return ResponseEntity.status(OK).body(new PageResponse<DogListRes>(dogPage));

    }


    @GetMapping("/shelters/{shelterNo}")
    @Operation(summary = "유기견 공고 보호소 기준 전체 조회", description = "전달받은 보호소 고유번호 기준으로 유기견 공고를 반환한다", tags = {
        "04.Dog"}, responses = {
        @ApiResponse(responseCode = "200", description = "보호소 기준 유기견 공고 목록을 정상적으로 반환한다."),
        @ApiResponse(responseCode = "400", description = "유기견 공고가 없음.")}

    )
    public ResponseEntity<List<DogListRes>> getDogList(@PathVariable int shelterNo,
                                                       @RequestParam(required = false)
                                                       Integer num) {
        return ResponseEntity.status(OK).body(dogService.getDogListByShelterNo(shelterNo, num));

    }
}
