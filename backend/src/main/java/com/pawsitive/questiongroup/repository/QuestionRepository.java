package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.entity.Question;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository
    extends JpaRepository<Question, Integer>, QuestionRepositoryCustom {
    Optional<Question> findByQuestionNo(int questionNo);

}