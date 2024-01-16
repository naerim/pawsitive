package com.ssafy.conference.repository;

import com.ssafy.conference.entity.ConferenceHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConferenceHistoryRepository extends JpaRepository<ConferenceHistory, Long> {
    void deleteByUserId(long ownerId);
}
