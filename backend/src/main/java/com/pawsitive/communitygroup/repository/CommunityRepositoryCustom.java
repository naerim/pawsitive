package com.pawsitive.communitygroup.repository;

import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityCommentDetailRes;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface CommunityRepositoryCustom {

    /**
     * 커뮤니티 글을 최근에 작성한 순으로 전체 조회합니다.
     *
     * @return 모든 커뮤니티 글
     */
    List<CommunityBoardDetailRes> getBoardList();

    /**
     * 커뮤니티 인기글을 전체 조회합니다.
     *
     * @return 인기글
     */
    List<CommunityBoardDetailRes> getRecommendationBoardListLimitNum(int num);

    /**
     * 카테고리별 커뮤니티 글을 조회합니다.
     *
     * @param communityCategoryNo 조회할 커뮤니티 글 카테고리 고유번호
     * @return 카테고리별 커뮤니티 글
     */

    List<CommunityBoardDetailRes> getBoardListByCategoryNo(
        int communityCategoryNo);

    /**
     * 커뮤니티 글 고유번호로 커뮤니티 글을 상세 조회합니다.
     *
     * @param boardNo 조회할 커뮤니티 글 고유번호
     * @return 커뮤니티 글
     */
    Optional<CommunityBoardDetailRes> getBoardByBoardNo(
        int boardNo);


    /**
     * 커뮤니티 글 고유번호로 해당 커뮤니티 글이 댓글들을 조회합니다.
     *
     * @param boardNo
     * @return
     */
    List<CommunityCommentDetailRes> getCommentsByBoardNo(int boardNo);
}
