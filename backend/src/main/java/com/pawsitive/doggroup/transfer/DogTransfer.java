package com.pawsitive.doggroup.transfer;

import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogFile;

import java.util.ArrayList;
import java.util.List;

public class DogTransfer {

    public static DogDetailRes entityToDto(Dog dog) {
        return DogDetailRes.builder()
            .dogNo(dog.getDogNo())
            .userNo(dog.getUser().getUserNo())
            .userName(dog.getUser().getName())
            .name(dog.getName())
            .kind(dog.getKind())
            .createdAt(dog.getCreatedAt())
            .isNeutralized(dog.isNeutralized())
            .age(dog.getAge())
            .note(dog.getNote())
            .hit(dog.getHit())
            .mbti(dog.getMbti())
            .statusNo(dog.getStatus().getNo())
            .files(dogFileToString(dog.getFiles()))
            .sex(dog.getSex())
            .address(dog.getUser().getAddress())
            .build();
    }

    public static DogDetailRes entityToDto(Dog dog, List<String> fileStr) {
        return DogDetailRes.builder()
            .dogNo(dog.getDogNo())
            .userNo(dog.getUser().getUserNo())
            .userName(dog.getUser().getName())
            .name(dog.getName())
            .kind(dog.getKind())
            .createdAt(dog.getCreatedAt())
            .isNeutralized(dog.isNeutralized())
            .age(dog.getAge())
            .note(dog.getNote())
            .hit(dog.getHit())
            .mbti(dog.getMbti())
            .statusNo(dog.getStatus().getNo())
            .sex(dog.getSex())
            .files(fileStr)
            .build();
    }

    private static List<String> dogFileToString(List<DogFile> dogFiles) {
        if (dogFiles.isEmpty()) {
            return List.of();
        }

        List<String> list = new ArrayList<>();
        for (DogFile file : dogFiles) {
            list.add(file.getFile());
        }

        return list;
    }

}
