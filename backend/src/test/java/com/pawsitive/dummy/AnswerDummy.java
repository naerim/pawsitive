package com.pawsitive.dummy;

import com.pawsitive.questiongroup.entity.Answer;
import com.pawsitive.questiongroup.entity.Question;
import com.pawsitive.usergroup.entity.Member;

public class AnswerDummy {
    public static Answer getSuccessEntity(Member member, Question question) {
        Answer answer = new Answer();
        answer.setMember(member);
        answer.setQuestion(question);
        answer.setContent("함께 산책했어요!");
        return answer;
    }
}
