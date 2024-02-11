package com.pawsitive.chatgroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.joda.time.LocalDateTime;

/**
 * @author 이하늬
 * @since 1.0
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MeetingDto {
    private String sessionId;
    private String consultantId;
    private int cnt;
    private LocalDateTime meetingRegisterTime;
}

