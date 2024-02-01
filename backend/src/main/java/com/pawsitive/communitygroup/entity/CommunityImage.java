package com.pawsitive.communitygroup.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "community_image")
public class CommunityImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_image_no")
    private int dogImageNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_board_no")
    private CommunityBoard communityBoard;

    @Column(name = "image")
    private String image;
}
