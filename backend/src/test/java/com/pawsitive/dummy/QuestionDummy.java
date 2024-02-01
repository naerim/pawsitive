package com.pawsitive.dummy;

import com.pawsitive.questiongroup.entity.Question;

public class QuestionDummy {

    public static Question getSuccessEntity() {
        Question question = new Question();
        question.setContent("오늘은 멍멍이와 무엇을 하셨나요?");
        return question;
    }
}
