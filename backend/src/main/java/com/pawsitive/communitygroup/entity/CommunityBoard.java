package com.pawsitive.communitygroup.entity;

import com.pawsitive.usergroup.entity.Member;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
@Table(name = "community_board")
public class CommunityBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_board_no")
    private int communityBoardNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private Member member;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "is_public")
    private Boolean isPublic;

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "created_at", insertable = false)
    private LocalDateTime createdAt;

    @Column(name = "hit", insertable = false)
    private int hit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_category_no")
    private CommunityCategory communityCategory;

    @OneToMany(mappedBy = "board")
    private List<CommunityComment> comments = new ArrayList<>();

    @Builder
    public CommunityBoard(Member member, String title, String content, boolean isPublic,
                          double latitude, double longitude, CommunityCategory communityCategory) {
        this.member = member;
        this.title = title;
        this.content = content;
        this.isPublic = isPublic;
        this.latitude = latitude;
        this.longitude = longitude;
        this.communityCategory = communityCategory;
    }


}
