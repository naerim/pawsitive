package com.pawsitive.usergroup.repository;

import com.pawsitive.usergroup.entity.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findMemberByUserNo(int userNo);

}
