package com.pawsitive.questiongroup.repository;

import com.pawsitive.questiongroup.dto.response.QuestionDetailRes;
import com.pawsitive.questiongroup.entity.QAnswer;
import com.pawsitive.questiongroup.entity.QQuestion;
import com.pawsitive.questiongroup.entity.Question;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import java.util.Optional;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class QuestionRepositoryImpl extends QuerydslRepositorySupport implements
    QuestionRepositoryCustom {
    private static final QQuestion qQuestion = QQuestion.question;
    private static final QAnswer qAnswer = QAnswer.answer;

    public QuestionRepositoryImpl() {
        super(Question.class);

    }

    @Override
    public Optional<QuestionDetailRes> getQuestionByUserNo(int userNo) {
        QuestionDetailRes questionDetailRes = from(qQuestion)
            .select(Projections.constructor(QuestionDetailRes.class, qQuestion.questionNo,
                qQuestion.content))
            .where(qQuestion.questionNo.notIn(
                JPAExpressions.select(qAnswer.question.questionNo)
                    .from(qAnswer)
                    .where(qAnswer.member.userNo.eq(userNo))))
            .fetchFirst();
        return Optional.ofNullable(questionDetailRes);
    }
}