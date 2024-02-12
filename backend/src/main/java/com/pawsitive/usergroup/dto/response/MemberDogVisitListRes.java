package com.pawsitive.usergroup.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberDogVisitListRes {

    private List<MemberDogVisitRes> visitedList;
    private Long count;

}
