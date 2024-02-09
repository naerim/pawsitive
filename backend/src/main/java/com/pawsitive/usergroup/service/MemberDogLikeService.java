package com.pawsitive.usergroup.service;

import com.pawsitive.doggroup.dto.request.MemberDogLikeReq;
import com.pawsitive.doggroup.dto.response.MemberDogLikeRes;

public interface MemberDogLikeService {

    /**
     * 유기견 공고를 찜하는 메서드입니다.
     *
     * @param req 찜 요청 DTO 객체
     */
    MemberDogLikeRes createMemberDogLike(MemberDogLikeReq req);

}
