package com.pawsitive.usergroup.repository;

import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.repository.DogRepositoryCustom;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.MemberDogLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberDogLikeRepository extends JpaRepository<MemberDogLike, Long>, MemberDogLikeRepositoryCustom {

    long countMemberDogLikesByDog(Dog dog);

    void deleteMemberDogLikeByMemberAndDog(Member member, Dog dog);

    List<MemberDogLike> findMemberDogLikesByMember(Member member);
}
