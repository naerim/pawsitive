package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.dto.response.AdoptedDogRes;

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

}
