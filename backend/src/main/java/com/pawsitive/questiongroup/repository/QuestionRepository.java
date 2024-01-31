package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface QuestionRepository
    extends JpaRepository<Question, Integer>, QuestionRepositoryCustom {

}