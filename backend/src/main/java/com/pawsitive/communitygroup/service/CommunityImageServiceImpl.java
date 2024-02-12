package com.pawsitive.communitygroup.service;

import com.pawsitive.common.exception.NotSavedException;
import com.pawsitive.common.util.S3BucketUtil;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import com.pawsitive.communitygroup.entity.CommunityImage;
import com.pawsitive.communitygroup.repository.CommunityImageRepository;
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
public class CommunityImageServiceImpl implements CommunityImageService {

    private final CommunityImageRepository communityImageRepository;
    private final S3BucketUtil s3BucketUtil;
    private final String FOLDER_NAME = "community";

    @Override
    @Transactional
    public CommunityBoard createCommunityImage(CommunityBoard communityBoard,
                                               MultipartFile[] images) {
        List<CommunityImage> imageList = new ArrayList<>();
        List<String> urlList = new ArrayList<>();

        for (MultipartFile image : images) {
            String url = s3BucketUtil.uploadFile(image, FOLDER_NAME);
            urlList.add(url);

            CommunityImage communityImage = new CommunityImage();
            communityImage.setCommunityBoard(communityBoard);
            communityImage.setImage(s3BucketUtil.getFileUrl(url, FOLDER_NAME));
            imageList.add(communityImage);
        }

        try {
            communityImageRepository.saveAll(imageList);
        } catch (Exception e) {
            for (String url : urlList) {
                s3BucketUtil.deleteFile(url, FOLDER_NAME);
            }
            throw new NotSavedException();
        }

        return communityBoard;
    }
}
