package com.pawsitive.adoptgroup.transfer;

import com.pawsitive.adoptgroup.dto.response.AdoptionDogRes;
import com.pawsitive.adoptgroup.entity.AdoptDog;

/**
 * @author 이하늬
 * @since 1.0
 */
public class AdoptDogTransfer {
    public static AdoptionDogRes entityToDto(AdoptDog dog) {
        return AdoptionDogRes.builder()
            .adoptDogNo(dog.getAdoptDogNo())
            .dogNo(dog.getDog().getDogNo())
            .age(dog.getAge())
            .createdAt(dog.getCreatedAt())
            .name(dog.getName())
            .weight(dog.getWeight())
            .userNo(dog.getMember().getUserNo())
            .build();
    }
}
