package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.entity.DogContent;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface DogContentRepository
    extends JpaRepository<DogContent, Integer>, DogContentRepositoryCustom {
}
