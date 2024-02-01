package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.dto.response.AdoptedDogRes;
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
    Optional<AdoptedDogRes> getAdoptedDogByUserNo(int userNo);
}
