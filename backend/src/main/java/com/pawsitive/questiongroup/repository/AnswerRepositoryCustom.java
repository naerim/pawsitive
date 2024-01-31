package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
import java.util.Optional;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author 이하늬
 * @since 1.0
 */
@NoRepositoryBean
public interface AnswerRepositoryCustom {
    Optional<AnswerDetailRes> getAnswerByUserNoAndQuestionNo(int questionNo, int userNo);

}
