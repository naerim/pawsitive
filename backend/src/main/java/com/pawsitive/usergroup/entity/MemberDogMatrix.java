package com.pawsitive.usergroup.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
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
@Table(name = "member_dog_matrix")
public class MemberDogMatrix {

    @Id
    private int userNo;

    @MapsId("userNo")
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    @Column(name = "member_dog_count", insertable = false)
    private int memberDogCount;

    @Column(name = "kind", insertable = false)
    private double kind;

    @Column(name = "neutralized", insertable = false)
    private double neutralized;

    @Column(name = "age", insertable = false)
    private double age;

    @Column(name = "sex", insertable = false)
    private double sex;

    @Column(name = "eq", insertable = false)
    private double eq;

    @Column(name = "si", insertable = false)
    private double si;

    @Column(name = "aw", insertable = false)
    private double aw;

    @Column(name = "fc", insertable = false)
    private double fc;

}
