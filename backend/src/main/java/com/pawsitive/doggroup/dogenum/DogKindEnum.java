package com.pawsitive.doggroup.dogenum;

import lombok.Getter;

@Getter
public enum DogKindEnum {
    MALTESE("말티즈", 0),
    BICHON("비숑", 1),
    CHIHUAHUA("치와와", 2),
    POODLE("푸들", 3),
    POMERANIAN("포메라니안", 4),
    SHIBA("시바견", 5),
    SHIHTZU("시츄", 6),
    DOBERMAN("도베르만", 7),
    RETRIEVER("리트리버", 8),
    ETC("기타", 9);

    private final String name;
    private final Integer no;

    DogKindEnum(String name, Integer no) {
        this.name = name;
        this.no = no;
    }

    public static DogKindEnum stringToEnum(String s) {
        for (DogKindEnum value : DogKindEnum.values()) {
            if (value.getName().equals(s)) {
                return value;
            }
        }
        return null;
    }
}
