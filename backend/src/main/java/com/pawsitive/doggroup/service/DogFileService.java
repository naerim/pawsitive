package com.pawsitive.doggroup.service;

import com.pawsitive.doggroup.entity.Dog;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface DogFileService {

    List<String> createDogFiles(Dog dog, MultipartFile[] files);

}
