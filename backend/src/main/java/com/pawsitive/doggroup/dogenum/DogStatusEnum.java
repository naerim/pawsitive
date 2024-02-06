package com.pawsitive.doggroup.dogenum;

import lombok.Getter;

@Getter
public enum DogStatusEnum {
    TODO(0, "공고중"), INPROGRESS(1, "입양진행중"), DONE(2, "입양완료");

    private final Integer no;
    private final String name;

    DogStatusEnum(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public static DogStatusEnum intToEnum(int n) {
        for (DogStatusEnum value : DogStatusEnum.values()) {
            if (value.getNo() == n) {
                return value;
            }
        }
        return null;
    }

    public static String noToName(int n) {
        for (DogStatusEnum value : DogStatusEnum.values()) {
            if (value.getNo() == n) {
                return value.getName();
            }
        }
        return null;
    }
}
