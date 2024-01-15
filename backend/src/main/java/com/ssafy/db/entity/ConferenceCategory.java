package com.ssafy.db.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 */
@Entity
@Getter
@Setter
@Table(name = "conference_category")
@NoArgsConstructor
public class ConferenceCategory extends BaseEntity {

  @Column(name = "name")
  private String name;

}
