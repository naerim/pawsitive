package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.dto.response.DogContentRes;
import com.pawsitive.doggroup.repository.DogContentRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DogContentServiceImpl implements DogContentService {

    private final DogContentRepository dogContentRepository;


    @Override
    public DogContentRes getDogContent(int dogNo) {
        Optional<DogContentRes> content = dogContentRepository.getDogContentByDogNo(dogNo);
        return content.orElseGet(() -> new DogContentRes(0, null));
    }
}
