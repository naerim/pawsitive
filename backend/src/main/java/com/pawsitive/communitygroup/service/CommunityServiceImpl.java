package com.pawsitive.communitygroup.service;

import com.pawsitive.communitygroup.entity.Community;
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
    public List<CommunityBoardDetailRes> getCommunityList() {
        return communityRepository.getCommunityList();
    }


    @Override
    public List<CommunityBoardDetailRes> getCommunityListByCommunityCategoryNo(
        int contentCategoryNo) {
        return null;
    }

    @Override
    public CommunityDetailRes getCommunity(int boardNo) {
        CommunityBoardDetailRes board =
            communityRepository.getBoardByBoardNo(boardNo)
                .orElseThrow(CommunityBoardNotFoundException::new);
        List<CommunityCommentDetailRes> comments =
            communityRepository.getCommentsByBoardNo(boardNo);
        return new CommunityDetailRes(board, comments);
    }

    @Override
    public List<CommunityDetailRes> getRecommendationCommunityList(int num) {
        List<CommunityDetailRes> communityDetailList = new ArrayList<>();
        List<Community> communityList =
            communityRepository.getRecommendationCommunityList(num);
        for (Community community : communityList) {
            communityDetailList.add(this.getCommunity(community.getCommunityBoard()
                .getCommunityBoardNo()));
        }
        return communityDetailList;
    }

}
