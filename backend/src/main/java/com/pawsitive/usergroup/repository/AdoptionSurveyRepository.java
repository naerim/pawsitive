package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.entity.AdoptionSurvey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdoptionSurveyRepository extends JpaRepository<AdoptionSurvey, Long> {

    Optional<AdoptionSurvey> getAdoptionSurveyByUserNo(int userNo);

}
