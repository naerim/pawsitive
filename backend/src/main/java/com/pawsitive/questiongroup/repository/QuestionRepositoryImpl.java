package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.QMemberQuestion;
import com.pawsitive.questiongroup.QQuestion;
import com.pawsitive.questiongroup.dto.QuestionDetailRes;
import com.pawsitive.questiongroup.entity.Question;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class QuestionRepositoryImpl extends QuerydslRepositorySupport implements
    QuestionRepositoryCustom {
    private final QQuestion qQuestion = QQuestion.question;
    private final QMemberQuestion qMemberQuestion = QMemberQuestion.memberQuestion;

    public QuestionRepositoryImpl() {
        super(Question.class);

    }

    @Override
    public Optional<QuestionDetailRes> getQuestionByUserNo(int userNo) {
        QuestionDetailRes questionDetailRes = from(qQuestion)
            .select(Projections.constructor(QuestionDetailRes.class, qQuestion.questionNo,
                qQuestion.questionNo))
            .where(qQuestion.questionNo.notIn(
                JPAExpressions.select(qMemberQuestion.question.questionNo)
                    .from(qMemberQuestion)
                    .where(qMemberQuestion.member.memberNo.eq(userNo))))
            .fetchFirst();
        return Optional.ofNullable(questionDetailRes);
    }
}