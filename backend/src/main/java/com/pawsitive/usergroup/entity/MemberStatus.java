package com.pawsitive.usergroup.entity;

// TODO [Yi] 회원 상태

import lombok.Getter;

/**
 * 0. 회원가입
 * 1. 체크리스트 확인한 사람 (stage 변경)
 * 2. 입양 설문 작성 완료한 사람 (stage 변경)
 * 3. 입양 확정이 된 사람 (stage 변경, 반려견 테이블에 등록)
 * 4. 반려견 정보를 등록한 사람 (반려견 테이블 수정)
 */
@Getter
public enum MemberStatus {
    JOIN(0),
    COMPLETED_CHECKLIST(1),
    COMPLETED_FORM(2),
    COMPLETED_ADOPTION(3),
    COMPLETED_REGISTER(4);

    private final int statusNo;

    MemberStatus(int statusNo) {
        this.statusNo = statusNo;
    }
}
