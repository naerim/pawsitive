package com.pawsitive.communitygroup.service;

import com.pawsitive.communitygroup.entity.CommunityCategory;
import com.pawsitive.communitygroup.exception.CommunityCategoryNotFoundException;
import com.pawsitive.communitygroup.repository.CommunityCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommunityCategoryServiceImpl implements CommunityCategoryService {
    private final CommunityCategoryRepository categoryRepository;

    @Override
    public CommunityCategory getCategoryByCategoryNo(int categoryNo) {
        return categoryRepository.findByCommunityCategoryNo(categoryNo)
            .orElseThrow(CommunityCategoryNotFoundException::new);
    }
}
