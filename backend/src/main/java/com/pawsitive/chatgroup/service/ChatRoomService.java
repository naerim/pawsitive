package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.ChatRoomCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomListRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.entity.ChatRoom;
import com.pawsitive.surveygroup.dto.request.AppointmentReq;
import java.util.List;
import org.springframework.security.core.Authentication;

public interface ChatRoomService {
    ChatRoomRes createChatRoom(ChatRoomCreateReq req, Authentication authentication);

    ChatRoom getChatRoomEntityByChatRoomNo(int chatRoomNo);

    List<ChatRes> getChatHistoryByChatRoomNo(int chatRoomNo);

    List<ChatRoomListRes> getChatRoomList(int userNo);

    String createAppointment(AppointmentReq appointmentReq);

    String acceptAppointment(AppointmentReq appointmentReq);
}
