package com.pawsitive.dummy;

import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.User;
import java.time.LocalDateTime;

public class MemberDummy {
    public static Member getSuccessEntity(User user) {
        Member member = new Member();
        member.setBirth(LocalDateTime.of(2024, 02, 02, 12, 55));
        member.setGender('F');
        member.setType(1);
        member.setStage(2);
        member.setMbti("esfj");
        return member;
    }
}
