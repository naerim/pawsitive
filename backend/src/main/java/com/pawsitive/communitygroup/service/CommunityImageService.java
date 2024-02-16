package com.pawsitive.communitygroup.service;

import com.pawsitive.communitygroup.entity.CommunityBoard;
import org.springframework.web.multipart.MultipartFile;

public interface CommunityImageService {
    CommunityBoard createCommunityImage(CommunityBoard communityBoard,
                                        MultipartFile[] images);
}
