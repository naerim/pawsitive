package com.pawsitive.surveygroup.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

/**
 * 웹 설문조사 테이블 (surveys) JPA 엔티티 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "surveys")
public class Surveys {

    @Id
    @Column(name = "survey_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int surveyNo;

    @Column(name = "q1_answer")
    private int q1Answer;

    @Column(name = "q2_answer")
    private int q2Answer;

    @Column(name = "q3_answer")
    private int q3Answer;

    @Column(name = "q4_answer")
    private int q4Answer;

    @Column(name = "q5_answer")
    private int q5Answer;

    @Builder
    public Surveys(int q1Answer, int q2Answer, int q3Answer, int q4Answer, int q5Answer) {
        this.q1Answer = q1Answer;
        this.q2Answer = q2Answer;
        this.q3Answer = q3Answer;
        this.q4Answer = q4Answer;
        this.q5Answer = q5Answer;
    }

}
