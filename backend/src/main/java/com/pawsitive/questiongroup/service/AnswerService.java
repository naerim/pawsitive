package com.pawsitive.questiongroup.service;

import com.pawsitive.questiongroup.dto.request.QuestionCreateReq;
import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
import java.util.List;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface AnswerService {
    /**
     * 회원이 입력한 질문에 대한 답변을 등록합니다.
     *
     * @param req 회원이 등록할 답변 내용
     * @return 등록 완료된 질문에 대한 상세 내용
     */
    AnswerDetailRes createQuestionAnswer(QuestionCreateReq req);

    /**
     * 질문 고유번호와 회원 등록번호로 질문과 답변 내용을 상세 조회 합니다.
     *
     * @param questionNo 조회할 질문 고유번호
     * @param userNo     조회할 회원 등록번호
     * @return 질문과 답변에 대한 상세 내용
     */

    AnswerDetailRes getQuestionAnswer(int questionNo, int userNo);

    /**
     * 회원 고유번호 기준 등록한 질문과 답변을 전체 조회합니다.
     *
     * @param userNo 회원 고유번호
     * @return 회원 고유번호로 조회한 등록한 질문 리스트
     */
    List<AnswerDetailRes> getQuestionListByUserNo(int userNo);
}
