package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.entity.MemberDogVisit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberDogVisitRepository
    extends JpaRepository<MemberDogVisit, Long>, MemberDogVisitRepositoryCustom {
}
