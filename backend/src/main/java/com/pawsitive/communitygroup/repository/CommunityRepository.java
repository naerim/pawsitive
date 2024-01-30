package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.entity.CommunityBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository
    extends JpaRepository<CommunityBoard, Integer>, CommunityRepositoryCustom {


}
