package com.pawsitive.communitygroup.entity;


import lombok.Getter;

@Getter
public enum CommunityCategoryEnum {
    SHOPPING("쇼핑하개"),
    WALKING("산책하개"),
    HEALTHY("건강하개"),
    PROUD("자랑하개"),
    ETC("기타");

    private final String communityCategory;

    CommunityCategoryEnum(String communityCategory) {
        this.communityCategory = communityCategory;
    }

    public static CommunityCategoryEnum stringToEnum(String s) {
        for (CommunityCategoryEnum value : CommunityCategoryEnum.values()) {
            if (value.getCommunityCategory().equals(s)) {
                return value;
            }
        }
        return null;
    }

}
