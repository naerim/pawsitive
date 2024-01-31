package com.pawsitive.questiongroup.service;

import com.pawsitive.questiongroup.dto.request.QuestionCreateReq;
import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface AnswerService {
    /**
     * 회원이 입력한 질문에 대한 답변을 등록합니다.
     *
     * @param userNo 회원 고유번호
     * @param req    회원이 등록할 답변 내용
     * @return 등록 완료된 질문에 대한 상세 내용
     */
    AnswerDetailRes createQuestionAnswer(int userNo, QuestionCreateReq req);

    AnswerDetailRes getQuestionAnswer(int questionNo, int userNo);
}
