package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.response.CommunityCommentDetailRes;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface CommunityRepositoryCustom {

    /**
     * 커뮤니티 글을 전체 조회합니다.
     *
     * @return 모든 커뮤니티 글
     */
    List<CommunityBoardDetailRes> getCommunityList();

    /**
     * 커뮤니티 인기글을 전체 조회합니다.
     *
     * @return 인기글
     */
    List<CommunityBoardDetailRes> getRecommendationCommunityList(int num);

    /**
     * 카테고리별 커뮤니티 글을 조회합니다.
     *
     * @param communityCategoryNo 조회할 커뮤니티 글 카테고리 고유번호
     * @return 카테고리별 커뮤니티 글
     */

    List<CommunityBoardDetailRes> getCommunityListByCommunityCategoryNo(int communityCategoryNo);

    /**
     * 커뮤니티 글 고유번호로 커뮤니티 글을 상세 조회합니다.
     *
     * @param boardNo 조회할 커뮤니티 글 고유번호
     * @return 커뮤니티 글
     */
    Optional<CommunityBoardDetailRes> getBoardByBoardNo(int boardNo);


    List<CommunityCommentDetailRes> getCommentsByBoardNo(int boardNo);
}
