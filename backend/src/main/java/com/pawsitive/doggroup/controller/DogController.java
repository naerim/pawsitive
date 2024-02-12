package com.pawsitive.doggroup.controller;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.common.dto.response.PageResponse;
import com.pawsitive.common.exception.NotSavedException;
import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.request.MemberDogLikeReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.dto.response.MemberDogLikeRes;
import com.pawsitive.doggroup.service.DogService;
import com.pawsitive.usergroup.service.MemberDogLikeService;
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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "03.Dog")
@RestController
@RequestMapping("/api/v1/dogs")
@RequiredArgsConstructor
@Slf4j
public class DogController {

    private final DogService dogService;
    private final MemberDogLikeService memberDogLikeService;

    @PostMapping
    @Operation(summary = "유기견 등록", description = "전달받은 입력 정보를 유기견 테이블에 등록합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "유기견 등록 성공"),
            @ApiResponse(responseCode = "400", description = "유기견 등록에 필요한 정보가 유효하지 않음")
        })
    public ResponseEntity<DogDetailRes> createDog(@Valid @RequestPart DogCreateReq req,
                                                  @RequestPart(required = false)
                                                  MultipartFile[] files) {
        return ResponseEntity.status(CREATED).body(dogService.createDog(req, files));
    }

    @GetMapping("/{dogNo}")
    @Operation(summary = "유기견 상세 조회", description = "전달받은 유기견 번호에 대한 상세 조회 정보를 반환합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "유기견 고유 번호에 해당하는 강아지 상세 조회 성공"),
            @ApiResponse(responseCode = "400", description = "유기견 고유 번호에 해당하는 강아지가 없음")
        })
    public ResponseEntity<DogDetailRes> getDogByDogNo(@PathVariable int dogNo, Authentication authentication) {

        return ResponseEntity.status(OK).body(dogService.getDogByDogNo(dogNo, authentication));
    }

    @GetMapping("/recommendation")
    @Operation(summary = "추천 강아지 조회", description = "전달받은 페이지에 해당하는 <strong>유기견 목록</strong>을 반환한다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "추천 강아지 목록을 정상적으로 반환한다."),
            @ApiResponse(responseCode = "400", description = "전달받은 페이지 값에 해당하는 추천 강아지가 없음.")
        })
    public ResponseEntity<List<DogListRes>> getRecommendationDogList(Authentication authentication) {

        return ResponseEntity.status(OK).body(dogService.getRecommendationDogList(authentication));
    }


    @GetMapping
    @Operation(summary = "유기견 공고 전체 조회", description = "전달받은 페이지 번호에 해당하는 유기견 공고를 반환한다. 유기견 필터링 조건 입력 시 조건에 따른 유기견 조회를 한다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "해당하는 페이지의 유기견 공고 목록을 정상적으로 반환한다."),
            @ApiResponse(responseCode = "400", description = "해당 페이지에 유기견 공고가 없음.")
        })
    public ResponseEntity<PageResponse<DogListRes>> getDogList(Pageable pageable,
                                                               @RequestParam(required = false)
                                                               List<String> kind,
                                                               @RequestParam(required = false)
                                                               Integer sex,
                                                               @RequestParam(required = false)
                                                               Integer neutralized,
                                                               Authentication authentication) {
        log.warn("DogController : authentication = {}", authentication.toString());


        Page<DogListRes> dogPage = dogService.getDogList(pageable, kind, sex, neutralized, authentication);

        return ResponseEntity.status(OK).body(new PageResponse<>(dogPage));

    }

    @GetMapping("/shelters/{shelterNo}")
    @Operation(summary = "유기견 공고 보호소 기준 전체 조회", description = "전달받은 보호소 고유번호 기준으로 유기견 공고를 반환한다",
        responses = {
            @ApiResponse(responseCode = "200", description = "보호소 기준 유기견 공고 목록을 정상적으로 반환한다."),
            @ApiResponse(responseCode = "400", description = "유기견 공고가 없음.")
        })
    public ResponseEntity<List<DogListRes>> getDogList(@PathVariable int shelterNo,
                                                       @RequestParam(required = false)
                                                       Integer num) {
        return ResponseEntity.status(OK).body(dogService.getDogListByShelterNo(shelterNo, num));

    }

    @PostMapping("/like")
    @Operation(summary = "유기견 공고 찜", description = "해당 유저가 전달받은 유기견 공고를 찜한다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "찜 정상 등록 완료"),
            @ApiResponse(responseCode = "400", description = "파라미터 오류"),
            @ApiResponse(responseCode = "401", description = "권한 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        })
    public ResponseEntity<MemberDogLikeRes> memberDogLike(@RequestBody MemberDogLikeReq req, Authentication authentication) {


        return ResponseEntity
            .status(OK)
            .body(memberDogLikeService.createMemberDogLike(req));
    }

    @PostMapping("/unlike")
    @Operation(summary = "유기견 공고 찜 취소", description = "이미 찜 되어있는 유기견 공고에 대해 찜을 취소한다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "찜 정상 취소 완료"),
            @ApiResponse(responseCode = "400", description = "파라미터 오류"),
            @ApiResponse(responseCode = "401", description = "권한 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        })
    public ResponseEntity<MemberDogLikeRes> deleteMemberDogLike(@RequestBody MemberDogLikeReq req, Authentication authentication) {
        return ResponseEntity
            .status(OK)
            .body(memberDogLikeService.deleteMemberDogLike(req));
    }

    @GetMapping("/like/{userNo}")
    @Operation(summary = "찜한 유기견 리스트 전체 조회", description = "이미 찜 되어있는 유기견 공고에 대해 찜을 취소한다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "찜 정상 취소 완료"),
            @ApiResponse(responseCode = "400", description = "파라미터 오류"),
            @ApiResponse(responseCode = "401", description = "권한 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        })
    public ResponseEntity<List<DogListRes>> getDogLikeList(@PathVariable int userNo) {
        return ResponseEntity
            .status(OK)
            .body(memberDogLikeService.getMemberDogLikeList(userNo));
    }

    private void checkUserAuthentication(Authentication authentication, String inputEmail) {
        User user = (User) authentication.getPrincipal();
        String email = user.getUsername();

        if (inputEmail.equals(email)) {
            throw new NotSavedException();
        }
    }

}