package com.pawsitive.usergroup.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "adoption_survey")
public class AdoptionSurvey {

    @Id
    private int userNo;

    @MapsId("userNo")
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private Member member;

    @Column(name = "accommodation_type")
    private String accommodationType;

    @Column(name = "carer")
    private String carer;

    @Column(name = "reason")
    private String reason;

    @Column(name = "family_type")
    private String familyType;

    @Column(name = "family_introduce")
    private String familyIntroduce;

    @Column(name = "family_add")
    private String familyAdd;

    @Column(name = "family_agree")
    private String familyAgree;

    @Column(name = "alone_time")
    private String aloneTime;

    @Column(name = "temporary_residence")
    private String temporaryResidence;

    @Column(name = "raise_history")
    private String raiseHistory;

    @Column(name = "raise_term")
    private String raiseTerm;

    @Column(name = "pet_route")
    private String petRoute;

    @Column(name = "pet_sociability")
    private String petSociability;

    @Column(name = "raise_no_reason")
    private String raiseNoReason;

    @Column(name = "personality")
    private String personality;

    @Column(name = "training")
    private String training;

    @Column(name = "hospital")
    private String hospital;

    @Column(name = "expenditure")
    private String expenditure;

    @Column(name = "forever_responsibility")
    private String foreverResponsibility;

}
