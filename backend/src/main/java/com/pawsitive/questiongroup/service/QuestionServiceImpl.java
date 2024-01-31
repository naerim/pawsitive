package com.pawsitive.questiongroup.service;

import com.pawsitive.questiongroup.dto.response.QuestionDetailRes;
import com.pawsitive.questiongroup.entity.Question;
import com.pawsitive.questiongroup.exception.QuestionNotFoundException;
import com.pawsitive.questiongroup.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;

    @Override
    public QuestionDetailRes getQuestionDetailByUserNo(int userNo) {
        return questionRepository.getQuestionByUserNo(userNo)
            .orElseThrow(QuestionNotFoundException::new);
    }

    @Override
    public Question getQuestionByQuestionNo(int questionNo) {
        return questionRepository.findByQuestionNo(questionNo)
            .orElseThrow(QuestionNotFoundException::new);
    }


}
