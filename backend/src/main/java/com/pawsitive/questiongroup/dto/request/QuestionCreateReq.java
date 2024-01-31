package com.pawsitive.questiongroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author 이하늬
 * @since 1.0
 */
@Getter
@AllArgsConstructor
public class QuestionCreateReq {
    private int questionNo;
    private String answerContent;
}
