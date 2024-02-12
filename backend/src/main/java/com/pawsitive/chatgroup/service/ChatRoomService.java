package com.pawsitive.chatgroup.service;

import com.pawsitive.adoptgroup.dto.request.AppointmentReq;
import com.pawsitive.chatgroup.dto.request.ChatRoomCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomDetailRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomListRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.entity.ChatRoom;
import java.util.List;
import org.springframework.security.core.Authentication;

public interface ChatRoomService {
    ChatRoomRes createChatRoom(ChatRoomCreateReq req, Authentication authentication);

    ChatRoom getChatRoomEntityByChatRoomNo(int chatRoomNo);

    List<ChatRes> getChatHistoryByChatRoomNo(int chatRoomNo);

    List<ChatRoomListRes> getChatRoomList(String type, int value);

    String createAppointment(AppointmentReq appointmentReq);

    String acceptAppointment(AppointmentReq appointmentReq);

    ChatRoomDetailRes getChatRoomDetail(int chatRoomNo);
}
