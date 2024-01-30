package com.pawsitive.doggroup.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.entity.DogImage;
import com.pawsitive.doggroup.repository.DogImageRepository;
import java.io.IOException;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author 이하늬
 * @since 1.0
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class DogImageServiceImpl implements DogImageService {

    private final DogImageRepository dogImageRepository;
    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Override
    @Transactional(propagation = Propagation.NESTED)
    public Dog createDogImage(MultipartFile[] dogImages, Dog dog) {
        if (dogImages == null) {
            return dog;
        }

        for (MultipartFile file : dogImages) {
            try {
                String url = UUID.randomUUID() + "_" + file.getOriginalFilename();

                ObjectMetadata metadata = new ObjectMetadata();
                metadata.setContentType(file.getContentType());
                metadata.setContentLength(file.getSize());

                PutObjectRequest request =
                    new PutObjectRequest(bucket, url, file.getInputStream(), metadata);
                request.withCannedAcl(CannedAccessControlList.AuthenticatedRead);

                PutObjectResult result = amazonS3Client.putObject(request);

                log.info(result.toString());

                DogImage image = new DogImage();
                image.setDog(dog);
                image.setUrl(url);

                try {
                    dogImageRepository.save(image);
                } catch (Exception e) {
                    amazonS3Client.deleteObject(bucket, url);
                }

            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        return dog;
    }

}
