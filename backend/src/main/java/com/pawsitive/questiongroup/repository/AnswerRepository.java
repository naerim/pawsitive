package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository
    extends JpaRepository<Answer, Integer>, AnswerRepositoryCustom {

}