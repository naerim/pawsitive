package com.pawsitive.adoptgroup.dto.request;

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
    private String date;
    private String time;
}
