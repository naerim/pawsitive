package com.pawsitive.communitygroup.service;

import com.pawsitive.communitygroup.exception.CommunityBoardNotFoundException;
import com.pawsitive.communitygroup.repository.CommunityRepository;
import com.pawsitive.communitygroup.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.response.CommunityCommentDetailRes;
import com.pawsitive.communitygroup.response.CommunityDetailRes;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommunityServiceImpl implements CommunityService {
    private final CommunityRepository communityRepository;

    @Override
    public List<CommunityDetailRes> getCommunityList() {
        List<CommunityBoardDetailRes> boardList = communityRepository.getBoardList();
        return getCommunityListByBoardList(boardList);
    }


    @Override
    public List<CommunityDetailRes> getCommunityListByCommunityCategoryNo(int categoryNo) {
        List<CommunityBoardDetailRes> boardList =
            communityRepository.getBoardListByCategoryNo(categoryNo);

        return getCommunityListByBoardList(boardList);
    }

    @Override
    public CommunityDetailRes getCommunity(int boardNo) {
        CommunityBoardDetailRes board = communityRepository.getBoardByBoardNo(boardNo)
            .orElseThrow(CommunityBoardNotFoundException::new);
        return getCommunityByBoard(board);
    }

    @Override
    public List<CommunityDetailRes> getRecommendationCommunityList(int num) {
        List<CommunityBoardDetailRes> boardList =
            communityRepository.getRecommendationBoardListLimitNum(num);
        return getCommunityListByBoardList(boardList);
    }

    private CommunityDetailRes getCommunityByBoard(CommunityBoardDetailRes board) {
        List<CommunityCommentDetailRes> commentList =
            communityRepository.getCommentsByBoardNo(board.getBoardNo());
        return new CommunityDetailRes(board, commentList);
    }

    private List<CommunityDetailRes> getCommunityListByBoardList(
        List<CommunityBoardDetailRes> boardList) {
        List<CommunityDetailRes> communityList = new ArrayList<>();

        for (CommunityBoardDetailRes board : boardList) {
            communityList.add(getCommunityByBoard(board));
        }

        return communityList;
    }
}
