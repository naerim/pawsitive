package com.pawsitive.contentgroup.entity;

import com.pawsitive.contentgroup.converter.ContentCategoryEnumConverter;
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
@Table(name = "content_category")
public class ContentCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "content_category_no")
    private int contentCategoryNo;

    @Convert(converter = ContentCategoryEnumConverter.class)
    @Column(name = "content_category_name")
    private ContentCategoryEnum contentCategoryName;
}
