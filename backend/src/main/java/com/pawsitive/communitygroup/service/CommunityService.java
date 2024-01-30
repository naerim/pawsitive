package com.pawsitive.communitygroup.service;

import com.pawsitive.communitygroup.response.CommunityDetailRes;
import java.util.List;

public interface CommunityService {
    List<CommunityDetailRes> getCommunityList();

    List<CommunityDetailRes> getCommunityListByCommunityCategoryNo(int communityCategoryNo);

    CommunityDetailRes getCommunity(int boardNo);

    List<CommunityDetailRes> getRecommendationCommunityList(int num);
}
