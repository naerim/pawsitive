package com.pawsitive.surveygroup.repository;

import com.pawsitive.surveygroup.entity.Surveys;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Surveys 테이블 JPA 레포지토리 입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public interface SurveysRepository extends JpaRepository<Surveys, Integer> {
}
