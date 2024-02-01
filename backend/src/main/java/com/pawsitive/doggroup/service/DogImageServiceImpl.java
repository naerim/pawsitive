package com.pawsitive.doggroup.service;

import com.pawsitive.common.exeption.NotSavedException;
import com.pawsitive.common.util.S3BucketUtil;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogImage;
import com.pawsitive.doggroup.repository.DogImageRepository;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service("dogImageService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class DogImageServiceImpl implements DogImageService {

    private final DogImageRepository dogImageRepository;
    private final S3BucketUtil s3BucketUtil;

    @Override
    public Dog createDogImage(Dog dog, MultipartFile[] images) {

        List<DogImage> dogImageList = new ArrayList<>();
        List<String> imageKeys = new ArrayList<>();

        for (MultipartFile image : images) {
            // 버킷에 업로드한 뒤 파일 명 가져오기
            String imageKey = s3BucketUtil.uploadFile(image);

            // 엔티티 저장 실패 시 Transaction 처리를 위해 파일명 List에 저장
            imageKeys.add(imageKey);

            // DogImage 객체 생성 후 dog와 url 지정한 뒤 List에 저장
            DogImage dogImage = new DogImage();
            dogImage.setDog(dog);
            dogImage.setImage(s3BucketUtil.getFileUrl(imageKey));
            dogImageList.add(dogImage);
        }

        try {
            dogImageRepository.saveAll(dogImageList);
        } catch (Exception e) {
            for (String key : imageKeys) {
                s3BucketUtil.deleteFile(key);
            }
            throw new NotSavedException();
        }

        return dog;
    }

}
