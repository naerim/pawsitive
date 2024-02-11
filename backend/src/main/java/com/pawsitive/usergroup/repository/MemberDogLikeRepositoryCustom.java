package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.entity.MemberDogLike;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface MemberDogLikeRepositoryCustom {

    List<Integer> getLikedDogList(Integer userNo);

    MemberDogLike getUserDogLiked(Integer dogNo, Integer userNo);

}
