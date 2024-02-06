package com.pawsitive.doggroup.service;

import com.pawsitive.common.exception.NotSavedException;
import com.pawsitive.common.util.S3BucketUtil;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogFile;
import com.pawsitive.doggroup.repository.DogFileRepository;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class DogFileServiceImpl implements DogFileService {

    private final DogFileRepository dogFileRepository;
    private final S3BucketUtil s3BucketUtil;
    private final String FOLDER_NAME = "dogs";

    @Override
    public void createDogFiles(Dog dog, MultipartFile[] files) {

        List<DogFile> dogFileList = new ArrayList<>();
        List<String> fileKeys = new ArrayList<>();

        for (MultipartFile file : files) {
            // 버킷에 업로드한 뒤 파일 명 가져오기
            String fileKey = s3BucketUtil.uploadFile(file, FOLDER_NAME);

            // 엔티티 저장 실패 시 Transaction 처리를 위해 파일명 List에 저장
            fileKeys.add(fileKey);

            // DogImage 객체 생성 후 dog와 url 지정한 뒤 List에 저장
            DogFile dogFile = new DogFile();
            dogFile.setDog(dog);
            dogFile.setFile(s3BucketUtil.getFileUrl(fileKey, FOLDER_NAME));
            dogFileList.add(dogFile);
        }

        try {
            dogFileRepository.saveAll(dogFileList);
        } catch (Exception e) {
            for (String key : fileKeys) {
                s3BucketUtil.deleteFile(key, FOLDER_NAME);
            }
            throw new NotSavedException();
        }

    }

}
