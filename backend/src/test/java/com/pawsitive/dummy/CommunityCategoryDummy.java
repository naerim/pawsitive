package com.pawsitive.dummy;

import com.pawsitive.communitygroup.entity.CommunityCategory;
import com.pawsitive.communitygroup.entity.CommunityCategoryEnum;

/**
 * @author 이하늬
 * @since 1.0
 */
public class CommunityCategoryDummy {
    public static CommunityCategory getSuccessEntity() {
        CommunityCategory category = new CommunityCategory();
        category.setCommunityCategoryEnum(CommunityCategoryEnum.WALKING);
        return category;
    }
}
