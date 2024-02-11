package com.pawsitive.usergroup.repository;

import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface MemberDogLikeRepositoryCustom {

    List<Integer> getLikedDogList(Integer userNo);

}
