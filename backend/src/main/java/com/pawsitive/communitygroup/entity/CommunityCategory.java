package com.pawsitive.communitygroup.entity;

import com.pawsitive.communitygroup.converter.CommunityCategoryEnumConverter;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "community_category")
public class CommunityCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_category_no")
    private int communityCategoryNo;

    @Convert(converter = CommunityCategoryEnumConverter.class)
    @Column(name = "community_category_name")
    private CommunityCategoryEnum communityCategoryEnum;
}
