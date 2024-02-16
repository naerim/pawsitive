package com.pawsitive.usergroup.service;

import com.pawsitive.doggroup.dto.request.MemberDogLikeReq;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.dto.response.MemberDogLikeRes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MemberDogLikeService {

    /**
     * 유기견 공고를 찜하는 메서드입니다.
     *
     * @param req 찜 요청 DTO 객체
     */
    MemberDogLikeRes createMemberDogLike(MemberDogLikeReq req);

    MemberDogLikeRes deleteMemberDogLike(MemberDogLikeReq req);

    List<DogListRes> getMemberDogLikeList(int userNo);

}
