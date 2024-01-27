package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author 이하늬
 * @since 1.0
 */
@Service
@RequiredArgsConstructor
public class DogServiceImpl implements DogService {
    private final DogRepository dogRepository;
    private final DogImageService dogImageService;
    private final UserService userService;

    @Override
    public boolean createDog(DogCreateReq req) {
        User user = userService.getUserByUserNo(req.getUserNo());

        Dog dog = Dog.builder()
            .user(user)
            .name(req.getName())
            .kind(req.getKind())
            .isNaturalized(req.getIsNaturalized())
            .color(req.getColor())
            .note(req.getNote())
//            .mbti(getMbti(req))
            .mbti("esaf")
            .build();

        Dog saveDog = dogRepository.save(dog);
        dogImageService.createDogImage(req);
        return Objects.nonNull(saveDog);
    }

    @Override
    public DogDetailRes getDogByDogNo(int dogNo) {
        return dogRepository.getDogByDogNo(dogNo)
            .orElseThrow(DogNotFoundException::new);
    }

    private String getMbti(DogCreateReq req) {
        //TODO mbti 구하는 로직 세우기

        return null;
    }
}
