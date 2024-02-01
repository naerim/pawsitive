package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.dto.response.AdoptedDogRes;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.repository.AdoptDogRepository;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
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

    @Override
    public AdoptedDogRes getAdoptedDogByUserNo(int userNo) {
        AdoptedDogRes adoptedDogRes =
            adoptDogRepository.getAdoptedDogByUserNo(userNo).orElseThrow(DogNotFoundException::new);

        // 오늘 날짜로, 몇일 지났는지 계산해서 AdoptedDays에 넣어주기
        adoptedDogRes.setAdoptedDays(
            (int) ChronoUnit.DAYS.between(LocalDateTime.now(), adoptedDogRes.getCreatedAt()));

        return adoptedDogRes;
    }

}
