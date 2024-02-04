package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface DogService {
    /**
     * 유기견을 등록하는 메서드입니다.
     *
     * @param req    유기견 등록을 위한 입력 정보
     * @param video  유기견 영상
     * @param images 유기견 사진들
     * @return 등록 성공한 유기견 상세 조회
     */
    DogDetailRes createDog(DogCreateReq req, MultipartFile video, MultipartFile[] images);

    /**
     * 유기견을 유기견 고유 번호로 상세조회하는 메서드입니다.
     *
     * @param dogNo 조회할 유기견 고유 번호
     * @return 유기견 고유 번호로 조회한 유기견 상세 정보
     */
    DogDetailRes getDogByDogNo(int dogNo);

    /**
     * 추천 강아지를 num마리 조회하는 메서드입니다.
     *
     * @param num 조회할 유기견 마리 수
     * @return 추천 강아지 목록
     */
    List<DogDetailRes> getRecommendationDogList(int num);

    /**
     * 유기견 공고 목록을 조회하는 메서드입니다.
     *
     * @param pageable 조회할 유기견 리스트 페이지 정보
     * @param kind
     * @return 해당 페이지 유기견 리스트
     */
    Page<DogDetailRes> getDogList(Pageable pageable, String kind);
    
}
