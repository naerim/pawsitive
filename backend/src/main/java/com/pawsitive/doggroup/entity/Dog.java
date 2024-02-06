package com.pawsitive.doggroup.entity;

import com.pawsitive.doggroup.converter.DogStatusEnumConverter;
import com.pawsitive.doggroup.dogenum.DogStatusEnum;
import com.pawsitive.usergroup.entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "dog")
public class Dog {

    @Id
    @Column(name = "dog_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dogNo;

    @ManyToOne
    @JoinColumn(name = "user_no")
    private User user;

    @Column(name = "name")
    private String name;

    //    @Convert(converter = DogKindEnumConverter.class)
    @Column(name = "kind")
    private String kind;

    @Column(name = "created_at", insertable = false)
    private LocalDateTime createdAt;

    @Column(name = "is_neutralized")
    private boolean isNeutralized;

    @Column(name = "age")
    private int age;

    @Column(name = "note")
    private String note;

    @Column(name = "hit")
    private int hit;

    @Column(name = "mbti")
    private String mbti;

    @Convert(converter = DogStatusEnumConverter.class)
    @Column(name = "status", insertable = false)
    private DogStatusEnum status;

    @OneToMany(mappedBy = "dog")
    private List<DogFile> files = new ArrayList<>();

    @Column(name = "sex")
    private String sex;

    @Builder
    public Dog(User user, String name, String kind, DogStatusEnum status,
               boolean isNeutralized, int age, String note, String mbti, String sex) {
        this.user = user;
        this.name = name;
        this.kind = kind;
        this.status = status;
        this.isNeutralized = isNeutralized;
        this.age = age;
        this.note = note;
        this.mbti = mbti;
        this.sex = sex;
    }

}
