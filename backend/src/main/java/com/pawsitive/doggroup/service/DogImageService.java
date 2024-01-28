package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.entity.Dog;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface DogImageService {
    /**
     * 유기견 사진을 등록하는 메서드입니다.
     *
     * @param dogImages 유기견 사진 등록을 위한 입력 받은 사진들
     * @param dog       사진 등록이 필요한 유기견
     * @return 등록한 사진에 대한 유기견
     */
    Dog createDogImage(MultipartFile[] dogImages, Dog dog);

}
