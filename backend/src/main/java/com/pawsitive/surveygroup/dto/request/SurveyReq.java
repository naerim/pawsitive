package com.pawsitive.surveygroup.dto.request;

import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

/**
 * 설문 요청 DTO 객체입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Getter
@Setter
public class SurveyReq {

    @Range(min = 0, max = 3)
    private int q1;

    @Range(min = 0, max = 4)
    private int q2;

    @Range(min = 0, max = 4)
    private int q3;

    @Range(min = 0, max = 4)
    private int q4;

    @Range(min = 0, max = 4)
    private int q5;

    @Size(max = 20)
    private String participant;

}
