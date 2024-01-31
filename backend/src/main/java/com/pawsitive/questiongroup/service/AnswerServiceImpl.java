package com.pawsitive.questiongroup.service;

import com.pawsitive.questiongroup.dto.request.QuestionCreateReq;
import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
import com.pawsitive.questiongroup.entity.Answer;
import com.pawsitive.questiongroup.exception.AnswerNotFoundException;
import com.pawsitive.questiongroup.repository.AnswerRepository;
import com.pawsitive.usergroup.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author 이하늬
 * @since 1.0
 */
@Service
@RequiredArgsConstructor
public class AnswerServiceImpl implements AnswerService {
    private final UserService userService;
    private final QuestionService questionService;
    private final AnswerRepository answerRepository;

    @Override
    public AnswerDetailRes createQuestionAnswer(int userNo, QuestionCreateReq req) {
        Answer answer = new Answer();
        answer.setMember(userService.getMemberByUserNo(userNo));
        answer.setQuestion(questionService.getQuestionByQuestionNo(req.getQuestionNo()));
        answer.setAnswer(req.getAnswerContent());
        answerRepository.save(answer);

        return getQuestionAnswer(answer.getQuestion().getQuestionNo(), userNo);
    }

    @Override
    public AnswerDetailRes getQuestionAnswer(int questionNo, int userNo) {
        return answerRepository.getAnswerByUserNoAndQuestionNo(questionNo, userNo)
            .orElseThrow(AnswerNotFoundException::new);
    }
}
