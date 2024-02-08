package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.entity.Chat;

public interface ChatService {
    ChatRes createChat(ChatCreateReq chatReq);
}
