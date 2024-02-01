package com.pawsitive.questiongroup.service;

import com.pawsitive.questiongroup.dto.request.QuestionCreateReq;
import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
import com.pawsitive.questiongroup.entity.Answer;
import com.pawsitive.questiongroup.exception.AnswerNotFoundException;
import com.pawsitive.questiongroup.repository.AnswerRepository;
import com.pawsitive.usergroup.service.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author 이하늬
 * @since 1.0
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AnswerServiceImpl implements AnswerService {
    private final UserService userService;
    private final QuestionService questionService;
    private final AnswerRepository answerRepository;

    @Override
    @Transactional
    public AnswerDetailRes createQuestionAnswer(int userNo, QuestionCreateReq req) {
        Answer answer = new Answer();
        answer.setMember(userService.getMemberByUserNo(userNo));
        answer.setQuestion(questionService.getQuestionByQuestionNo(req.getQuestionNo()));
        answer.setContent(req.getAnswerContent());
        answerRepository.save(answer);

        return getQuestionAnswer(answer.getQuestion().getQuestionNo(), userNo);
    }

    @Override
    public AnswerDetailRes getQuestionAnswer(int questionNo, int userNo) {
        return answerRepository.getAnswerByUserNoAndQuestionNo(questionNo, userNo)
            .orElseThrow(AnswerNotFoundException::new);
    }

    @Override
    public List<AnswerDetailRes> getQuestionListByUserNo(int userNo) {
        return answerRepository.getAnswerListByUserNo(userNo);
    }
}
