package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.dto.QuestionDetailRes;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface QuestionRepositoryCustom {
    Optional<QuestionDetailRes> getQuestionByUserNo(int userNo);

}
