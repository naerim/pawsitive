package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.entity.CommunityBoard;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityBoardRepository
    extends JpaRepository<CommunityBoard, Integer>, CommunityBoardRepositoryCustom {

    Optional<CommunityBoard> getCommunityBoardByCommunityBoardNo(int communityBoardNo);

}
