package com.pawsitive.communitygroup.entity;


import lombok.Getter;

@Getter
public enum CommunityCategoryEnum {
    SHOPPING("쇼핑하개", 4),
    WALKING("산책하개", 5),
    HEALTHY("영양하개", 3),
    PROUD("자랑하개", 2),
    KNOWLEDGE("지식쌓개", 1),
    ETC("기타", 6);

    private final String categoryName;
    private final int categoryNo;

    CommunityCategoryEnum(String categoryName, int categoryNo) {
        this.categoryName = categoryName;
        this.categoryNo = categoryNo;
    }

    public static CommunityCategoryEnum stringToEnum(String s) {
        for (CommunityCategoryEnum value : CommunityCategoryEnum.values()) {
            if (value.getCategoryName().equals(s)) {
                return value;
            }
        }
        return null;
    }

}
