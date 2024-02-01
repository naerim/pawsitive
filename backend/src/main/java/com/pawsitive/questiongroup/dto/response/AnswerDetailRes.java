package com.pawsitive.questiongroup.dto.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author 이하늬
 * @since 1.0
 */
@AllArgsConstructor
@Getter
public class AnswerDetailRes {
    private int userNo;
    private int questionNo;
    private String questionContent;
    private int answerNo;
    private String answerContent;
    private LocalDateTime createdAt;
}
