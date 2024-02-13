package com.pawsitive.adoptgroup.service;

import com.pawsitive.adoptgroup.dto.request.AdoptionReq;
import com.pawsitive.adoptgroup.dto.request.UpdateAdoptDogRes;
import com.pawsitive.adoptgroup.dto.response.AdoptionDogRes;
import com.pawsitive.adoptgroup.entity.AdoptDog;
import com.pawsitive.adoptgroup.exception.AdoptDogNotFoundException;
import com.pawsitive.adoptgroup.repository.AdoptDogRepository;
import com.pawsitive.adoptgroup.transfer.AdoptDogTransfer;
import com.pawsitive.common.exception.NotSavedException;
import com.pawsitive.common.util.S3BucketUtil;
import com.pawsitive.doggroup.dogenum.DogStatusEnum;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.service.DogService;
import com.pawsitive.usergroup.service.UserService;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 * AdoptDogService 구현 클래스 입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Service("adoptDogService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AdoptDogServiceImpl implements AdoptDogService {

    private final AdoptDogRepository adoptDogRepository;
    private final DogService dogService;
    private final UserService userService;
    private final S3BucketUtil s3BucketUtil;
    private final String FOLDER_NAME = "adoptdogs";

    @Override
    public AdoptionDogRes getAdoptedDogByUserNo(int userNo) {
        AdoptionDogRes adoptionDogRes =
            adoptDogRepository.getAdoptedDogByUserNo(userNo).orElseThrow(DogNotFoundException::new);

        adoptionDogRes.setAdoptedDays(getAdoptedDays(adoptionDogRes.getCreatedAt()));

        return adoptionDogRes;
    }

    @Override
    @Transactional
    public AdoptionDogRes createAdoptDog(AdoptionReq adoptionReq) {
        AdoptDog adoptDog = new AdoptDog();
        Dog dog = dogService.updateStatus(adoptionReq.getDogNo(), DogStatusEnum.DONE);
        adoptDog.setDog(dog);
        adoptDog.setMember(userService.getMemberByUserNo(adoptionReq.getUserNo()));
        adoptDog.setName(dog.getName());
        adoptDog.setAge(null);
        adoptDog.setWeight(null);

        AdoptDog saved = adoptDogRepository.save(adoptDog);
        AdoptionDogRes adoptionDogRes = AdoptDogTransfer.entityToDto(saved);
        adoptionDogRes.setAdoptedDays(getAdoptedDays(adoptDog.getCreatedAt()));

        return adoptionDogRes;
    }

    @Override
    @Transactional
    public AdoptionDogRes updateInformation(int adoptDogNo, UpdateAdoptDogRes updateAdoptDogRes,
                                            MultipartFile file) {
        AdoptDog adoptDogEntity = getAdoptDogEntity(adoptDogNo);

        if (Objects.nonNull(updateAdoptDogRes.getAge())) {
            adoptDogEntity.setAge(updateAdoptDogRes.getAge());
        }
        if (Objects.nonNull(updateAdoptDogRes.getName())) {
            adoptDogEntity.setName(updateAdoptDogRes.getName());
        }
        if (Objects.nonNull(updateAdoptDogRes.getWeight())) {
            adoptDogEntity.setWeight(updateAdoptDogRes.getWeight());
        }
        String fileKey = null;
        if (Objects.nonNull(file)) {
            // 버킷에 업로드한 뒤 파일 명 가져오기
            fileKey = s3BucketUtil.uploadFile(file, FOLDER_NAME);

            adoptDogEntity.setImage(s3BucketUtil.getFileUrl(fileKey, FOLDER_NAME));
        }
        AdoptDog updatedDog = null;
        try {
            updatedDog = adoptDogRepository.save(adoptDogEntity);
        } catch (Exception e) {
            if (fileKey != null) {
                s3BucketUtil.deleteFile(fileKey, FOLDER_NAME);
                throw new NotSavedException();
            }
        }

        AdoptionDogRes adoptionDogRes = AdoptDogTransfer.entityToDto(updatedDog);
        adoptionDogRes.setAdoptedDays(getAdoptedDays(adoptDogEntity.getCreatedAt()));

        return adoptionDogRes;
    }

    @Override
    public AdoptDog getAdoptDogEntity(int adoptDogNo) {
        return adoptDogRepository.getAdoptDogByAdoptDogNo(adoptDogNo)
            .orElseThrow(AdoptDogNotFoundException::new);
    }


    /**
     * 입양일자로부터 오늘까지 몇일 지났는지 계산한 값을 반환
     *
     * @param createdAt 입양일자
     */
    private int getAdoptedDays(LocalDateTime createdAt) {
        return (int) ChronoUnit.DAYS.between(createdAt.toLocalDate(), LocalDate.now());

    }

}
