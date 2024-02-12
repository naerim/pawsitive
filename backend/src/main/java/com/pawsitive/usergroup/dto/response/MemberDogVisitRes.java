package com.pawsitive.usergroup.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberDogVisitRes {

    private int memberDogVisitNo;
    private int userNo;
    private int dogNo;
    private LocalDateTime createdAt;

}
