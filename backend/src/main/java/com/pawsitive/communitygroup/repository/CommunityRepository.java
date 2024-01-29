package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository
    extends JpaRepository<Community, Integer>, CommunityRepositoryCustom {


}
