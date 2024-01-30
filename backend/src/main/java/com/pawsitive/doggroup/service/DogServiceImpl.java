package com.pawsitive.doggroup.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogImage;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.repository.DogImageRepository;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
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
@Slf4j
public class DogServiceImpl implements DogService {

    private final DogRepository dogRepository;
    private final DogImageRepository dogImageRepository;
    
    private final UserService userService;

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Override
    @Transactional
    public Dog createDog(DogCreateReq req, MultipartFile video, MultipartFile[] images)
        throws Exception {
        User user = userService.getUserByUserNo(req.getUserNo());

        String videoKey = uploadFile(video);

        Dog dog = Dog.builder()
            .user(user)
            .name(req.getName())
            .kind(req.getKind())
            .isNaturalized(req.getIsNaturalized())
            .color(req.getColor())
            .note(req.getNote())
            .mbti(getMbti(req))
            .video(videoKey)
            .build();

        try {
            dogRepository.save(dog);
        } catch (Exception e) {
            amazonS3Client.deleteObject(bucket, videoKey);
            throw new Exception(e.getMessage());
        }

        List<DogImage> dogImageList = new ArrayList<>();
        List<String> imageKeys = new ArrayList<>();

        for (MultipartFile image : images) {
            // 버킷에 업로드한 뒤 파일 명 가져오기
            String imageKey = uploadFile(image);

            // 엔티티 저장 실패 시 Transaction 처리를 위해 파일명 List에 저장
            imageKeys.add(imageKey);

            // DogImage 객체 생성 후 dog와 url 지정한 뒤 List에 저장
            DogImage dogImage = new DogImage();
            dogImage.setDog(dog);
            dogImage.setUrl(imageKey);
            dogImageList.add(dogImage);
        }

        try {
            dogImageRepository.saveAll(dogImageList);
        } catch (Exception e) {
            for (String key : imageKeys) {
                amazonS3Client.deleteObject(bucket, key);
            }

            throw new Exception(e.getMessage());
        }

        return dog;
    }

    @Override
    public DogDetailRes getDogByDogNo(int dogNo) {
        return dogRepository.getDogByDogNo(dogNo)
            .orElseThrow(DogNotFoundException::new);
    }

    private String getMbti(DogCreateReq req) {
        StringBuilder sb = new StringBuilder();
        String tmp;
        tmp = req.getEq() ? "E" : "Q";
        sb.append(tmp);
        tmp = req.getSi() ? "S" : "I";
        sb.append(tmp);
        tmp = req.getAw() ? "A" : "W";
        sb.append(tmp);
        tmp = req.getFc() ? "F" : "C";
        sb.append(tmp);
        return sb.toString();
    }

    private String uploadFile(MultipartFile file) {

        if (Objects.isNull(file)) {
            return "";
        }

        try {
            String key = UUID.randomUUID() + "_" + file.getOriginalFilename();

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(file.getContentType());
            metadata.setContentLength(file.getSize());

            PutObjectRequest request =
                new PutObjectRequest(bucket, key, file.getInputStream(), metadata);

            request.withCannedAcl(CannedAccessControlList.AuthenticatedRead);

            PutObjectResult result = amazonS3Client.putObject(request);

            log.info(result.toString());

            return key;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

}
