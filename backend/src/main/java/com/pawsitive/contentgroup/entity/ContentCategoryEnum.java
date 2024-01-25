package com.pawsitive.contentgroup.entity;


import lombok.Getter;

@Getter
public enum ContentCategoryEnum {
    HEALTH("건강"), PETICKET("펫티켓"), ETC("기타");

    private final String contentCategory;

    ContentCategoryEnum(String contentCategory) {
        this.contentCategory = contentCategory;
    }

    public static ContentCategoryEnum stringToEnum(String s) {
        for (ContentCategoryEnum value : ContentCategoryEnum.values()) {
            if (value.getContentCategory().equals(s)) {
                return value;
            }
        }
        return null;
    }

}
