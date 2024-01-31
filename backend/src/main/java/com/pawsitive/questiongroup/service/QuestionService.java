package com.pawsitive.questiongroup.service;

import com.pawsitive.questiongroup.dto.QuestionDetailRes;

public interface QuestionService {
    /**
     * 회원 고유번호로 등록해야 할 질문을 조회합니다.
     *
     * @param userNo 회원 고유번호
     * @return 회원 고유번호로 등록해야 할 질문
     */
    QuestionDetailRes getQuestionDetailByUserNo(int userNo);
}
