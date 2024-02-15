package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.dto.response.DogContentRes;
import org.springframework.stereotype.Service;

@Service
public interface DogContentService {

    DogContentRes getDogContent(int dogNo);

}
