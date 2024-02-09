package com.pawsitive.usergroup.service;

import com.pawsitive.common.exception.NotFoundException;
import com.pawsitive.doggroup.dto.request.MemberDogLikeReq;
import com.pawsitive.doggroup.dto.response.MemberDogLikeRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.MemberDogLike;
import com.pawsitive.usergroup.repository.MemberDogLikeRepository;
import com.pawsitive.usergroup.repository.MemberRepository;
import com.pawsitive.usergroup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("memberDogLikeService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class MemberDogLikeServiceImpl implements MemberDogLikeService {

    private final MemberDogLikeRepository memberDogLikeRepository;
    private final MemberRepository memberRepository;
    private final DogRepository dogRepository;

    @Override
    @Transactional
    public MemberDogLikeRes createMemberDogLike(MemberDogLikeReq req) {
        Member member = memberRepository.findMemberByUserNo(req.getUserNo()).orElseThrow();
        Dog dog = dogRepository.findByDogNo(req.getDogNo()).orElseThrow();

        memberDogLikeRepository.save(MemberDogLike.builder()
            .member(member)
            .dog(dog)
            .build());

        return MemberDogLikeRes.builder()
            .dogNo(dog.getDogNo())
            .totalLikeCount(memberDogLikeRepository.countMemberDogLikesByDog(dog))
            .build();
    }
}
