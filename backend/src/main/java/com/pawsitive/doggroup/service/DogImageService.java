package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.exception.DogNotSavedException;
import org.springframework.web.multipart.MultipartFile;

public interface DogImageService {
    Dog createDogImage(Dog dog, MultipartFile[] images) throws DogNotSavedException;
}
