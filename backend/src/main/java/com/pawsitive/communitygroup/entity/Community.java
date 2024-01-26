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
@Table(name = "community")
public class Community {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_no")
    private int communityNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_board_no")
    private CommunityBoard communityBoard;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_comment_no")
    private CommunityComment communityComment;
}
