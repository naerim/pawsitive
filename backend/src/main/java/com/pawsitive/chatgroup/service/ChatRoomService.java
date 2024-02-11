package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.ChatRoomCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomListRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.dto.response.ChatSessionRes;
import com.pawsitive.chatgroup.dto.response.ChatTokenRes;
import com.pawsitive.chatgroup.entity.ChatRoom;
import com.pawsitive.surveygroup.dto.request.AppointmentReq;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import java.util.List;
import java.util.Map;
import org.springframework.security.core.Authentication;

public interface ChatRoomService {
    ChatRoomRes createChatRoom(ChatRoomCreateReq req, Authentication authentication);

    ChatRoom getChatRoomEntityByChatRoomNo(int chatRoomNo);

    List<ChatRes> getChatHistoryByChatRoomNo(int chatRoomNo);

    List<ChatRoomListRes> getChatRoomList(String type, int value);

    String createAppointment(AppointmentReq appointmentReq);

    String acceptAppointment(AppointmentReq appointmentReq);

    ChatSessionRes createSessions(Map<String, Object> params)
        throws OpenViduJavaClientException, OpenViduHttpException;

    ChatTokenRes getToken(String sessionId, Map<String, Object> params)
        throws OpenViduJavaClientException, OpenViduHttpException;
}
