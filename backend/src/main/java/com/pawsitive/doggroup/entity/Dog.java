package com.pawsitive.doggroup.entity;

import com.pawsitive.usergroup.entity.User;
import jakarta.persistence.Column;
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

    @Column(name = "kind")
    private String kind;

    @Column(name = "created_at", insertable = false)
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

    @OneToMany(mappedBy = "dog")
    private List<DogImage> images = new ArrayList<>();

    @Builder
    public Dog(User user, String name, String kind, boolean isNaturalized, String color,
               String video,
               String note, String mbti) {
        this.user = user;
        this.name = name;
        this.kind = kind;
        this.isNaturalized = isNaturalized;
        this.color = color;
        this.video = video;
        this.note = note;
        this.mbti = mbti;
    }


    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Dog{");
        sb.append("dogNo=").append(dogNo);
        sb.append(", name='").append(name).append('\'');
        sb.append(", kind='").append(kind).append('\'');
        sb.append('}');
        return sb.toString();
    }

}
