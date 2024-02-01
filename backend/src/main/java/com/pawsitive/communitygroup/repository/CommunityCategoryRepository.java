package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.entity.CommunityCategory;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityCategoryRepository
    extends JpaRepository<CommunityCategory, Integer> {

    Optional<CommunityCategory> findByCommunityCategoryNo(int categoryNo);


}
