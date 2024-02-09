package com.pawsitive.surveygroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author 이하늬
 * @since 1.0
 */
@Getter
@AllArgsConstructor
public class AppointmentReq {
    private int userNo;
    private int chatRoomNo;
}
