package com.pawsitive.doggroup.dto.response;

import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogImage;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class DogPageRes {

    List<DogDetailRes> content;
    int currentPage;
    int totalPages;
    int pageSize;
    int totalElements;

    /**
     * Dog 타입의 List를 받아 DogDetailRes 타입의 List를 만들어 반환하는 메서드입니다.
     *
     * @param dogList 변환할 Dog 타입의 리스트
     * @return DogDetailRes 리스트
     */
    public static List<DogDetailRes> toDogDetailRes(List<Dog> dogList) {
        List<DogDetailRes> dogDetailResList = new ArrayList<>();
        for (Dog d : dogList) {

            // 이미지 List 만들기
            List<String> images = new ArrayList<>();
            for (DogImage img : d.getImages()) {
                images.add(img.getUrl());
            }

            // DogDetailRes를 Builder로 만든 뒤 List에 추가
            dogDetailResList.add(DogDetailRes.builder()
                .dogNo(d.getDogNo())
                .userNo(d.getUser().getUserNo())
                .userName(d.getUser().getName())
                .name(d.getName())
                .kind(d.getKind())
                .createdAt(d.getCreatedAt())
                .isNeutralized(d.isNeutralized())
                .age(d.getAge())
                .color(d.getColor())
                .video(d.getVideo())
                .note(d.getNote())
                .hit(d.getHit())
                .mbti(d.getMbti())
                .isAdopted(d.isAdopted())
                .images(images)
                .build());
        }

        return dogDetailResList;
    }

}
