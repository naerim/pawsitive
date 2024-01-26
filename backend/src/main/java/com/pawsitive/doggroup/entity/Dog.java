package com.pawsitive.doggroup.entity;

import com.pawsitive.usergroup.entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
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
    private int dogNo;

    @ManyToOne
    @JoinColumn(name = "user_no")
    private User user;

    @Column(name = "name")
    private String name;

    @Column(name = "kind")
    private String kind;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_naturalized")
    private boolean isNaturalized;

    @Column(name = "color")
    private String color;

    @Column(name = "video")
    private String video;

    @Column(name = "note")
    private String note;

    @Column(name = "hit")
    private int hit;

    @Column(name = "mbti")
    private String mbti;
}
