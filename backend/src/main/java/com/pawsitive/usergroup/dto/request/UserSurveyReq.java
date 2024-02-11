package com.pawsitive.usergroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class UserSurveyReq {

    private int userNo;
    private String accommodationType;
    private String carer;
    private String reason;
    private String familyType;
    private String familyIntroduce;
    private String familyAdd;
    private String familyAgree;
    private String aloneTime;
    private String temporaryResidence;
    private String raiseHistory;
    private String raiseTerm;
    private String petRoute;
    private String petSociability;
    private String raiseNoReason;
    private String personality;
    private String training;
    private String hospital;
    private String expenditure;
    private String foreverResponsibility;

}
