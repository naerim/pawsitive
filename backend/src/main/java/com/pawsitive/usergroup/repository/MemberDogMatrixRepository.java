package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.entity.MemberDogMatrix;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberDogMatrixRepository extends JpaRepository<MemberDogMatrix, Long> {

    Optional<MemberDogMatrix> getMemberDogMatrixByUserNo(int userNo);

}
