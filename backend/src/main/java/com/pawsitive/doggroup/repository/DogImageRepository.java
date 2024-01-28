package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.entity.DogImage;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface DogImageRepository extends JpaRepository<DogImage, Integer> {
}
