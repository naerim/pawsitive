package com.pawsitive.usergroup.transfer;

import com.pawsitive.usergroup.dto.request.UserSurveyReq;
import com.pawsitive.usergroup.dto.response.UserSurveyRes;
import com.pawsitive.usergroup.entity.AdoptionSurvey;

/**
 * AdoptionSurvey와 DTO (Req, Res) 간 Transfer 메서드를 가지고 있는 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
public class AdoptionSurveyTransfer {

    /**
     * DTO를 Entity로 변경하는 메서드입니다.
     *
     * @param req 요청 DTO 객체
     * @return AdoptionSurvey 엔티티 객체
     */
    public static AdoptionSurvey dtoToEntity(UserSurveyReq req) {
        return AdoptionSurvey.builder()
            .userNo(req.getUserNo())
            .accommodationType(req.getAccommodationType())
            .carer(req.getCarer())
            .reason(req.getReason())
            .familyType(req.getFamilyType())
            .familyIntroduce(req.getFamilyIntroduce())
            .familyAdd(req.getFamilyAdd())
            .familyAgree(req.getFamilyAgree())
            .aloneTime(req.getAloneTime())
            .temporaryResidence(req.getTemporaryResidence())
            .raiseHistory(req.getRaiseHistory())
            .raiseTerm(req.getRaiseTerm())
            .petRoute(req.getPetRoute())
            .petSociability(req.getPetSociability())
            .raiseNoReason(req.getRaiseNoReason())
            .personality(req.getPersonality())
            .training(req.getTraining())
            .hospital(req.getHospital())
            .expenditure(req.getExpenditure())
            .foreverResponsibility(req.getForeverResponsibility())
            .build();
    }

    /**
     * Entity를 DTO로 변환하는 클래스입니다.
     *
     * @param survey AdoptionSurvey 엔티티 객체
     * @return 응답 DTO 객체
     */
    public static UserSurveyRes entityToDto(AdoptionSurvey survey) {
        return UserSurveyRes.builder()
            .userNo(survey.getUserNo())
            .accommodationType(survey.getAccommodationType())
            .carer(survey.getCarer())
            .reason(survey.getReason())
            .familyType(survey.getFamilyType())
            .familyIntroduce(survey.getFamilyIntroduce())
            .familyAdd(survey.getFamilyAdd())
            .familyAgree(survey.getFamilyAgree())
            .aloneTime(survey.getAloneTime())
            .temporaryResidence(survey.getTemporaryResidence())
            .raiseHistory(survey.getRaiseHistory())
            .raiseTerm(survey.getRaiseTerm())
            .petRoute(survey.getPetRoute())
            .petSociability(survey.getPetSociability())
            .raiseNoReason(survey.getRaiseNoReason())
            .personality(survey.getPersonality())
            .training(survey.getTraining())
            .hospital(survey.getHospital())
            .expenditure(survey.getExpenditure())
            .foreverResponsibility(survey.getForeverResponsibility())
            .build();
    }

    /**
     * 이미 존재하는 Entity에 대해 setter로 DTO 객체의 값을 설정해주는 메서드입니다.
     *
     * @param survey 값을 변경할 Entity 객체
     * @param req    값을 담고 있는 요청 DTO 객체
     */
    public static void setEntityValues(AdoptionSurvey survey, UserSurveyReq req) {
        survey.setAccommodationType(req.getAccommodationType());
        survey.setCarer(req.getCarer());
        survey.setReason(req.getReason());
        survey.setFamilyType(req.getFamilyType());
        survey.setFamilyIntroduce(req.getFamilyIntroduce());
        survey.setFamilyAdd(req.getFamilyAdd());
        survey.setFamilyAgree(req.getFamilyAgree());
        survey.setAloneTime(req.getAloneTime());
        survey.setTemporaryResidence(req.getTemporaryResidence());
        survey.setRaiseHistory(req.getRaiseHistory());
        survey.setRaiseTerm(req.getRaiseTerm());
        survey.setPetRoute(req.getPetRoute());
        survey.setPetSociability(req.getPetSociability());
        survey.setRaiseNoReason(req.getRaiseNoReason());
        survey.setPersonality(req.getPersonality());
        survey.setTraining(req.getTraining());
        survey.setHospital(req.getHospital());
        survey.setExpenditure(req.getExpenditure());
        survey.setForeverResponsibility(req.getForeverResponsibility());
    }

}
