package com.pawsitive.doggroup.dogenum;

import lombok.Getter;

@Getter
public enum DogNeutralizedEnum {
    TRUE(true, 1), FALSE(false, 2);
    private final Boolean flag;
    private final int no;

    DogNeutralizedEnum(Boolean flag, int no) {
        this.flag = flag;
        this.no = no;
    }

    public static Boolean intToBoolean(int n) {
        for (DogNeutralizedEnum value : DogNeutralizedEnum.values()) {
            if (value.getNo() == n) {
                return value.getFlag();
            }
        }
        return false;
    }
}
