package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
import com.pawsitive.questiongroup.entity.Answer;
import com.pawsitive.questiongroup.entity.QAnswer;
import com.pawsitive.questiongroup.entity.QQuestion;
import com.pawsitive.usergroup.entity.QMember;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
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
    private QAnswer qAnswer = QAnswer.answer1;


    public AnswerRepositoryImpl() {
        super(Answer.class);
    }

    @Override
    public Optional<AnswerDetailRes> getAnswerByUserNoAndQuestionNo(int questionNo, int userNo) {
        JPQLQuery<AnswerDetailRes> answerList = from(qAnswer)
            .innerJoin(qAnswer.member, qMember)
            .innerJoin(qAnswer.question, qQuestion)
            .select(Projections.constructor(AnswerDetailRes.class,
                qMember.memberNo, qQuestion.questionNo, qQuestion.content,
                qAnswer.MemberQuestionNo, qAnswer.answer, qAnswer.createdAt))
            .where(qAnswer.question.questionNo.eq(questionNo))
            .where(qMember.memberNo.eq(userNo));

        return Optional.ofNullable(answerList.fetchOne());
    }
}
