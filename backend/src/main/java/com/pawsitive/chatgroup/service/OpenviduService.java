package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.response.ChatSessionRes;
import com.pawsitive.chatgroup.dto.response.ChatTokenRes;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import java.util.Map;

/**
 * @author 이하늬
 * @since 1.0
 */
public interface OpenviduService {
    ChatSessionRes createSessions(Map<String, Object> params)
        throws OpenViduJavaClientException, OpenViduHttpException;

    ChatTokenRes getToken(String sessionId, Map<String, Object> params)
        throws OpenViduJavaClientException, OpenViduHttpException;

    String disconnectSessions(String sessionId)
        throws OpenViduJavaClientException, OpenViduHttpException;
}
