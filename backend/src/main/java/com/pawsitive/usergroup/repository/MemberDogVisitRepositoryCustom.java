package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.dto.response.MemberDogVisitListRes;
import com.pawsitive.usergroup.entity.MemberDogVisit;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface MemberDogVisitRepositoryCustom {

    MemberDogVisit getMemberDogVisited(int dogNo, int userNo);

    MemberDogVisitListRes getMemberDogVisitedList(int userNo);

}
