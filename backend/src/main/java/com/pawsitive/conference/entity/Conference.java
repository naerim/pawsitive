package com.pawsitive.conference.entity;

import com.pawsitive.common.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "conference")
public class Conference extends BaseEntity {

    @Column(name = "owner_id")
    private int ownerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conference_id")
    private ConferenceCategory conferenceCategory;

    @Column(name = "call_start_time")
    private LocalDateTime callStartTime;

    @Column(name = "call_end_time")
    private LocalDateTime callEndTime;

    @Column(name = "thumbnail_url")
    private String thumbnailUrl;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "isActive")
    private boolean isActive;

}
