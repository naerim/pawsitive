package com.pawsitive.conference.repository;

import com.pawsitive.conference.entity.ConferenceHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConferenceHistoryRepository extends JpaRepository<ConferenceHistory, Long> {
    void deleteByUserId(long ownerId);
}
