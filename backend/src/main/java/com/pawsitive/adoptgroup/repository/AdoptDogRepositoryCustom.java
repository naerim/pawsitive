package com.pawsitive.adoptgroup.repository;

import com.pawsitive.adoptgroup.dto.response.AdoptionDogRes;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * AdoptDogRepository 입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@NoRepositoryBean
public interface AdoptDogRepositoryCustom {
    Optional<AdoptionDogRes> getAdoptedDogByUserNo(int userNo);
}
