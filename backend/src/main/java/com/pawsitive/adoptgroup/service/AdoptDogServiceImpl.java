package com.pawsitive.adoptgroup.service;

import com.pawsitive.adoptgroup.dto.request.AdoptionReq;
import com.pawsitive.adoptgroup.dto.request.UpdateAdoptDogRes;
import com.pawsitive.adoptgroup.dto.response.AdoptionDogRes;
import com.pawsitive.adoptgroup.entity.AdoptDog;
import com.pawsitive.adoptgroup.exception.AdoptDogNotFoundException;
import com.pawsitive.adoptgroup.repository.AdoptDogRepository;
import com.pawsitive.adoptgroup.transfer.AdoptDogTransfer;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.service.DogService;
import com.pawsitive.usergroup.service.UserService;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Override
    public AdoptionDogRes getAdoptedDogByUserNo(int userNo) {
        AdoptionDogRes adoptionDogRes =
            adoptDogRepository.getAdoptedDogByUserNo(userNo).orElseThrow(DogNotFoundException::new);

        setAdoptedDays(adoptionDogRes);

        return adoptionDogRes;
    }

    @Override
    public AdoptionDogRes createAdoptDog(AdoptionReq adoptionReq) {
        AdoptDog adoptDog = new AdoptDog();
        Dog dog = dogService.getDogEntityByDogNo(adoptionReq.getDogNo());
        adoptDog.setDog(dog);
        adoptDog.setMember(userService.getMemberByUserNo(adoptionReq.getUserNo()));
        adoptDog.setName(dog.getName());
        adoptDog.setAge(null);
        adoptDog.setWeight(null);

        AdoptDog saved = adoptDogRepository.save(adoptDog);
        AdoptionDogRes adoptionDogRes = AdoptDogTransfer.entityToDto(saved);
        setAdoptedDays(adoptionDogRes);

        return adoptionDogRes;
    }

    @Override
    public AdoptionDogRes updateInformation(int adoptDogNo, UpdateAdoptDogRes updateAdoptDogRes) {
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

        AdoptDog updatedDog = adoptDogRepository.save(adoptDogEntity);
        AdoptionDogRes adoptionDogRes = AdoptDogTransfer.entityToDto(updatedDog);
        setAdoptedDays(adoptionDogRes);

        return adoptionDogRes;
    }

    @Override
    public AdoptDog getAdoptDogEntity(int adoptDogNo) {
        return adoptDogRepository.getAdoptDogByAdoptDogNo(adoptDogNo)
            .orElseThrow(AdoptDogNotFoundException::new);
    }


    /**
     * 오늘 날짜로, 몇일 지났는지 계산해서 AdoptedDays에 넣어주기
     *
     * @param adoptionDogRes
     */
    private static void setAdoptedDays(AdoptionDogRes adoptionDogRes) {
        adoptionDogRes.setAdoptedDays(
            (int) ChronoUnit.DAYS.between(LocalDateTime.now(), adoptionDogRes.getCreatedAt()));
    }

}
