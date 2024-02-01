package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.entity.AdoptDog;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * AdoptDogRepository 입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public interface AdoptDogRepository
    extends JpaRepository<AdoptDog, Integer>, AdoptDogRepositoryCustom {
}
