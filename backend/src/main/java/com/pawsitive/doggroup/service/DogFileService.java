package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.entity.Dog;
import org.springframework.web.multipart.MultipartFile;

public interface DogFileService {

    void createDogFiles(Dog dog, MultipartFile[] files);

}
