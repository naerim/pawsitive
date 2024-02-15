package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.dto.response.DogContentRes;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author 이하늬
 * @since 1.0
 */
@NoRepositoryBean
public interface DogContentRepositoryCustom {
    Optional<DogContentRes> getDogContentByDogNo(int dogNo);
}
