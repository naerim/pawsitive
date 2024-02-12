package com.pawsitive.communitygroup.service;

import com.pawsitive.communitygroup.dto.request.CommunityCreateReq;
import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityDetailRes;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

public interface CommunityService {
    /**
     * 커뮤니티 글을 전체 조회합니다.
     *
     * @return 커뮤니티 글 전체 조회
     */
    Page<CommunityBoardDetailRes> getCommunityList(Pageable pageable, Integer categoryNo);

    /**
     * 커뮤니티 글을 카테고리별로 전체 조회합니다.
     *
     * @param pageable
     * @param communityCategoryNo 카테고리 고유번호
     * @return 카테고리별 커뮤니티 글 전체 조회
     */
    Page<CommunityBoardDetailRes> getCommunityListByCommunityCategoryNo(Pageable pageable,
                                                                        int communityCategoryNo);

    /**
     * 커뮤니티 글과 해당 글의 댓글들을 상세조회 합니다.
     *
     * @param boardNo 조회할 커뮤니티 글 고유번호
     * @return 커뮤니티 글과 댓글 상세 조회
     */
    CommunityDetailRes getCommunity(int boardNo);

    CommunityBoardDetailRes getCommunityBoard(int boardNo);

    CommunityBoard getCommunityBoardEntity(int boardNo);


    CommunityBoard updateHit(CommunityBoard board);

    /**
     * 조회수가 높은 순으로 추천 게시물을 조회합니다.
     *
     * @param num 조회할 갯수
     * @return 추천 게시물 전체 조회
     */
    List<CommunityBoardDetailRes> getRecommendationCommunityList(int num);

    /**
     * 커뮤니티 글을 등록합니다.
     *
     * @param req    커뮤니티 글 등록 입력 정보
     * @param images 커뮤니티 글 이미지 리스트
     * @return 등록한 글 상세 조회
     */

    CommunityBoardDetailRes createCommunityBoard(CommunityCreateReq req, MultipartFile[] images);
}
