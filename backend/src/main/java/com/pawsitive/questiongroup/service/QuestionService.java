package com.pawsitive.questiongroup.service;

import com.pawsitive.questiongroup.dto.response.QuestionDetailRes;
import com.pawsitive.questiongroup.entity.Question;

public interface QuestionService {
    /**
     * 회원 고유번호로 등록해야 할 질문을 조회합니다.
     *
     * @param userNo 회원 고유번호
     * @return 회원 고유번호로 등록해야 할 질문
     */
    QuestionDetailRes getQuestionDetailByUserNo(int userNo);

    /**
     * 질문 고유번호로 엔터티를 조회합니다.
     *
     * @param questionNo 조회할 질문 번호
     * @return 질문 고유번호로 조회한 엔터티
     */
    Question getQuestionByQuestionNo(int questionNo);

}
