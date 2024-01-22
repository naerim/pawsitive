package com.pawsitive.conference.repository;

import com.pawsitive.conference.entity.Conference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConferenceRepository extends JpaRepository<Conference, Long> {
    void deleteByOwnerId(long ownerId);
}
