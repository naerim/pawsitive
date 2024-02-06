package com.pawsitive.doggroup.dogenum;

import lombok.Getter;

@Getter
public enum DogSexEnum {
    MALE("m", 1), FEMALE("f", 2);
    private final String name;
    private final int no;

    DogSexEnum(String name, int no) {
        this.name = name;
        this.no = no;
    }

    public static String intToString(int n) {
        for (DogSexEnum value : DogSexEnum.values()) {
            if (value.getNo() == n) {
                return value.getName();
            }
        }
        return null;
    }
}
