package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogImage;
import com.pawsitive.doggroup.repository.DogImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author 이하늬
 * @since 1.0
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DogImageServiceImpl implements DogImageService {
    private final DogImageRepository dogImageRepository;

    @Override
    @Transactional
    public Dog createDogImage(MultipartFile[] dogImages, Dog dog) {
        if (dogImages == null) {
            return null;
        }
        //TODO [Yi] S3에 업로드 한 url 받아오는 로직 추가 필요
        for (MultipartFile file : dogImages) {
            String url = null;
            DogImage image = new DogImage();
            image.setDog(dog);
            image.setUrl(url);
            dogImageRepository.save(image);
        }
        return dog;
    }
}
