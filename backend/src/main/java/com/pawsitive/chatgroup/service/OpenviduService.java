package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.SessionCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatSessionRes;
import com.pawsitive.chatgroup.dto.response.ChatTokenRes;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface OpenviduService {
    ChatSessionRes createSessions(/*Map<String, Object> params, */
        SessionCreateReq sessionCreateReq)
        throws OpenViduJavaClientException, OpenViduHttpException;

    ChatTokenRes getToken(String sessionId)
        throws OpenViduJavaClientException, OpenViduHttpException;

    String disconnectSessions(String sessionId)
        throws OpenViduJavaClientException, OpenViduHttpException;
}
