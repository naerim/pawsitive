package com.pawsitive.doggroup.service;

import com.pawsitive.common.exception.NotSavedException;
import com.pawsitive.common.util.S3BucketUtil;
import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogStatusEnum;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    private final DogFileService dogFileService;

    private final S3BucketUtil s3BucketUtil;

    @Override
    @Transactional
    public DogDetailRes createDog(DogCreateReq req, MultipartFile[] files) {
        User user = userService.getUserByUserNo(req.getUserNo());

        Dog dog = Dog.builder().user(user).name(req.getName())
            .kind(req.getKind()).isNeutralized(req.getIsNaturalized())
            .note(req.getNote()).mbti(getMbti(req))
            .sex(req.getSex()).age(req.getAge()).build();

        Dog savedDog;
        try {
            savedDog = dogRepository.save(dog);
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new NotSavedException();
        }

        dogFileService.createDogFiles(savedDog, files);

        return getDogByDogNo(savedDog.getDogNo());
    }

    @Override
    public DogDetailRes getDogByDogNo(int dogNo) {
        DogDetailRes dog =
            dogRepository.getDogByDogNo(dogNo).orElseThrow(DogNotFoundException::new);
        dog.setFiles(dogRepository.getDogFilesByDogNo(dog.getDogNo()));
        return dog;
    }

    @Override
    public Dog getDogEntityByDogNo(int dogNo) {
        return dogRepository.findByDogNo(dogNo)
            .orElseThrow(DogNotFoundException::new);
    }

    // TODO [Yi] 추천로직 작성 (추천기준도 정해야댐)
    @Override
    public List<DogListRes> getRecommendationDogList(Integer num) {
        List<DogListRes> dogList;
        if (Objects.isNull(num)) {
            dogList = dogRepository.getRecommendationDogList();
        } else {
            dogList = dogRepository.getRecommendationDogList(num);
        }
        setStatusName(dogList);
        setThumbnailImage(dogList);
        return dogList;
    }

    @Override
    public Page<DogListRes> getDogList(Pageable pageable, String kind) {
        Page<DogListRes> dogList;
        if (Objects.isNull(kind)) {
            dogList = dogRepository.getDogList(pageable);
        } else {
            dogList = dogRepository.getDogListByKindNo(pageable, kind);
        }
        setStatusName(dogList);
        setThumbnailImage(dogList);
        return dogList;
    }

    @Override
    public List<DogListRes> getDogListByShelterNo(int shelterNo, Integer num) {
        List<DogListRes> dogList;
        if (Objects.isNull(num)) {
            dogList = dogRepository.getDogListByShelterNo(shelterNo);
        } else {
            dogList = dogRepository.getDogListByShelterNo(shelterNo, num);
        }
        setStatusName(dogList);
        setThumbnailImage(dogList);
        return dogList;
    }

    private void setStatusName(Iterable<DogListRes> dogList) {
        for (DogListRes dog : dogList) {
            dog.setStatusName(DogStatusEnum.noToName(dog.getStatusNo()));
        }
    }

    private void setThumbnailImage(Iterable<DogListRes> dogList) {
        for (DogListRes dog : dogList) {
            List<String> files = dogRepository.getDogFilesByDogNo(dog.getDogNo());
            if (!files.isEmpty()) {
                dog.setFile(files.get(0));
            }
        }
    }

    private String getMbti(DogCreateReq req) {
        StringBuilder sb = new StringBuilder();
        String tmp;
        tmp = Boolean.TRUE.equals(req.getEq()) ? "E" : "Q";
        sb.append(tmp);
        tmp = Boolean.TRUE.equals(req.getSi()) ? "S" : "I";
        sb.append(tmp);
        tmp = Boolean.TRUE.equals(req.getAw()) ? "A" : "W";
        sb.append(tmp);
        tmp = Boolean.TRUE.equals(req.getFc()) ? "F" : "C";
        sb.append(tmp);
        return sb.toString();
    }

}
