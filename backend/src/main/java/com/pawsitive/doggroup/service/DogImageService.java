package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.dto.request.DogCreateReq;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface DogImageService {
    /**
     * 유기견 사진을 등록하는 메서드입니다.
     *
     * @param req 유기견 사진 등록을 위한 입력 정보
     * @return 유기견 등록 성공 여부
     */
    boolean createDogImage(DogCreateReq req);

}
