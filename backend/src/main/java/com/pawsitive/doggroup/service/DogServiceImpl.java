package com.pawsitive.doggroup.service;

import com.pawsitive.common.util.S3BucketUtil;
import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.exception.DogNotSavedException;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

    private final UserService userService;
    private final DogImageService dogImageService;

    private final S3BucketUtil s3BucketUtil;

    @Override
    @Transactional
    public Dog createDog(DogCreateReq req, MultipartFile video, MultipartFile[] images)
        throws Exception {
        User user = userService.getUserByUserNo(req.getUserNo());

        String videoKey = s3BucketUtil.uploadFile(video);

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
            dog = dogRepository.save(dog);
            log.info(dog.toString());
        } catch (Exception e) {
            s3BucketUtil.deleteFile(videoKey);
            throw new DogNotSavedException();
        }

        log.info(dog.toString());

        return dogImageService.createDogImage(dog, images);
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


}
