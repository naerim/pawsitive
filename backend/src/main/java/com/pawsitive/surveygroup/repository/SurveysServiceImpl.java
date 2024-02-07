package com.pawsitive.surveygroup.repository;

import com.pawsitive.surveygroup.dto.request.SurveyReq;
import com.pawsitive.surveygroup.entity.Surveys;
import com.pawsitive.surveygroup.service.SurveysService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * Surveys 서비스 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Service("surveysService")
@RequiredArgsConstructor
@Slf4j
public class SurveysServiceImpl implements SurveysService {

    private final SurveysRepository surveysRepository;

    @Override
    public void createSurvey(SurveyReq req) {
        surveysRepository.save(Surveys.builder()
            .q1Answer(req.getQ1())
            .q2Answer(req.getQ2())
            .q3Answer(req.getQ3())
            .q4Answer(req.getQ4())
            .q5Answer(req.getQ5())
            .participant(req.getParticipant())
            .build());
    }

}
