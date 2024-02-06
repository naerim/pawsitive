package com.pawsitive.doggroup.dogenum;

import lombok.Getter;

@Getter
public enum DogStatusEnum {
    TODO("공고 중", 0),
    INPROGRESS("절차 진행 중", 1),
    DONE("입양 완료", 2);

    private String name;
    private Integer no;

    DogStatusEnum(String name, int no) {
        this.name = name;
        this.no = no;
    }

    public static String IntToString(int n) {
        for (DogStatusEnum value : DogStatusEnum.values()) {
            if (value.getNo() == n) {
                return value.getName();
            }
        }

        return null;
    }

    public static DogStatusEnum intToEnum(int n) {
        for (DogStatusEnum value : DogStatusEnum.values()) {
            if (value.getNo() == n) {
                return value;
            }
        }

        return null;
    }

}
