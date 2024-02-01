package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
import com.pawsitive.questiongroup.entity.Answer;
import com.pawsitive.questiongroup.entity.QAnswer;
import com.pawsitive.questiongroup.entity.QQuestion;
import com.pawsitive.usergroup.entity.QMember;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * @author 이하늬
 * @since 1.0
 */
public class AnswerRepositoryImpl extends QuerydslRepositorySupport
    implements AnswerRepositoryCustom {
    private QMember qMember = QMember.member;
    private QQuestion qQuestion = QQuestion.question;
    private QAnswer qAnswer = QAnswer.answer;


    public AnswerRepositoryImpl() {
        super(Answer.class);
    }

    @Override
    public Optional<AnswerDetailRes> getAnswerByUserNoAndQuestionNo(int questionNo, int userNo) {
        JPQLQuery<AnswerDetailRes> answerList = getQueryAnswerDetail()
            .where(qAnswer.question.questionNo.eq(questionNo))
            .where(qMember.userNo.eq(userNo));

        return Optional.ofNullable(answerList.fetchOne());
    }

    @Override
    public List<AnswerDetailRes> getAnswerListByUserNo(int userNo) {
        return getQueryAnswerDetail()
            .where(qMember.userNo.eq(userNo))
            .fetch();

    }


    private JPQLQuery<AnswerDetailRes> getQueryAnswerDetail() {
        return from(qAnswer)
            .innerJoin(qAnswer.member, qMember)
            .innerJoin(qAnswer.question, qQuestion)
            .select(Projections.constructor(AnswerDetailRes.class,
                qMember.userNo, qQuestion.questionNo, qQuestion.content,
                qAnswer.answer_no, qAnswer.content, qAnswer.createdAt));
    }

}
