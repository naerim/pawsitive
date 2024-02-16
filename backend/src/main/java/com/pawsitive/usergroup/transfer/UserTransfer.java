package com.pawsitive.usergroup.transfer;

import com.pawsitive.usergroup.dto.response.UserRes;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.User;

public class UserTransfer {

    public static UserRes entityToDto(User user) {
        return UserRes.builder()
            .email(user.getEmail())
            .name(user.getName())
            .address(user.getAddress())
            .role(user.getRole().getTitle())
            .build();
    }

    public static UserRes entityToDto(Member member) {
        return UserRes.builder()
            .userNo(member.getUser().getUserNo())
            .email(member.getUser().getEmail())
            .name(member.getUser().getName())
            .address(member.getUser().getAddress())
            .role(member.getUser().getRole().getTitle())
            .birth(member.getBirth().toString())
            .stage(member.getStage())
            .type(member.getType())
            .gender(member.getGender())
            .build();
    }


}
