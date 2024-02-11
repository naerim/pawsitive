package com.pawsitive.usergroup.service;

import com.pawsitive.doggroup.dto.request.MemberDogLikeReq;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.dto.response.MemberDogLikeRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.MemberDogLike;
import com.pawsitive.usergroup.repository.MemberDogLikeRepository;
import com.pawsitive.usergroup.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

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

    @Override
    @Transactional
    public MemberDogLikeRes deleteMemberDogLike(MemberDogLikeReq req) {
        Member member = memberRepository.findMemberByUserNo(req.getUserNo()).orElseThrow();
        Dog dog = dogRepository.findByDogNo(req.getDogNo()).orElseThrow();

        memberDogLikeRepository.deleteMemberDogLikeByMemberAndDog(member, dog);

        return MemberDogLikeRes.builder()
            .dogNo(dog.getDogNo())
            .totalLikeCount(memberDogLikeRepository.countMemberDogLikesByDog(dog))
            .build();

    }

    @Override
    public List<DogListRes> getMemberDogLikeList(int userNo) {
        List<Integer> dogNoList = memberDogLikeRepository.getLikedDogList(userNo);
        List<DogListRes> dogListResList = dogRepository.getDogListIn(dogNoList);
        setThumbnailImage(dogListResList);

        return dogListResList;
    }

    private void setThumbnailImage(Iterable<DogListRes> dogList) {
        for (DogListRes dog : dogList) {
            List<String> files = dogRepository.getDogFilesByDogNo(dog.getDogNo());
            if (!files.isEmpty()) {
                dog.setFile(files.get(0));
            }
        }
    }

}
