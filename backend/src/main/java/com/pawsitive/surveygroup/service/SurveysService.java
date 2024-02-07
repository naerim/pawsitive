package com.pawsitive.surveygroup.service;

import com.pawsitive.surveygroup.dto.request.SurveyReq;

/**
 * Surveys 관련 서비스 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public interface SurveysService {

    void createSurvey(SurveyReq req);

}
