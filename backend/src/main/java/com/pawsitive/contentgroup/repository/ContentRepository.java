package com.pawsitive.contentgroup.repository;

import com.pawsitive.contentgroup.entity.Content;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository
    extends JpaRepository<Content, Integer>, ContentRepositoryCustom {
    /**
     * 전체 컨텐츠를 조회합니다.
     *
     * @return 전체 컨텐츠
     */
    List<Content> findContents();

}
