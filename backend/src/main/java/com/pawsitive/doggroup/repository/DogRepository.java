package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.entity.Dog;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface DogRepository extends JpaRepository<Dog, Integer>, DogRepositoryCustom {
    Optional<Dog> findByDogNo(int dogNo);
}
