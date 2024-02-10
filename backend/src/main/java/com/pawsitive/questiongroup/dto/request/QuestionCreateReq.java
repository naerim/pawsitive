package com.pawsitive.questiongroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

/**
 * @author 이하늬
 * @since 1.0
 */
@Getter
@AllArgsConstructor
public class QuestionCreateReq {
    private int userNo;
    private int questionNo;
    @Length(max = 500)
    private String answerContent;
}
