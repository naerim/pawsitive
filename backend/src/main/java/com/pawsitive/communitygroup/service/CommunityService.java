package com.pawsitive.communitygroup.service;

import com.pawsitive.communitygroup.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.response.CommunityDetailRes;
import java.util.List;

public interface CommunityService {
    List<CommunityBoardDetailRes> getCommunityList();

    List<CommunityBoardDetailRes> getCommunityListByCommunityCategoryNo(int communityCategoryNo);

    CommunityDetailRes getCommunity(int boardNo);

    List<CommunityBoardDetailRes> getRecommendationList(Integer num);
}
