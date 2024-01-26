package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.entity.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository
    extends JpaRepository<Content, Integer>, ContentRepositoryCustom {


}
