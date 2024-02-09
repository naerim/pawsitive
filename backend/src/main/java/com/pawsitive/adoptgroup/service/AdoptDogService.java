package com.pawsitive.adoptgroup.service;

import com.pawsitive.adoptgroup.dto.request.AdoptionReq;
import com.pawsitive.doggroup.dto.response.AdoptedDogRes;
import com.pawsitive.usergroup.dto.response.AdoptionRes;

/**
 * AdoptDogService 입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public interface AdoptDogService {

    /**
     * 유저가 입양한 강아지의 정보를 가져오는 메서드입니다.
     *
     * @param userNo 유저 번호 (PK)
     * @return AdoptedDogRes Dto
     */
    AdoptedDogRes getAdoptedDogByUserNo(int userNo);

    /**
     * 유기견 입양 정보를 등록하는 메서드입니다.
     *
     * @param adoptionReq 유기견 입양 정보
     * @return 유기견 입양 정보 dto
     */

    AdoptionRes createAdoptDog(AdoptionReq adoptionReq);
}
