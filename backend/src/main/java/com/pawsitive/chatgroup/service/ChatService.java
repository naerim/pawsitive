package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.ChatCreateReq;
import com.pawsitive.chatgroup.entity.Chat;

public interface ChatService {
    Chat createChat(ChatCreateReq chatReq);
}
