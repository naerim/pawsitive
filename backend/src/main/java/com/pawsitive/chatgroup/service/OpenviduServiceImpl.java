package com.pawsitive.chatgroup.service;

import com.pawsitive.chatgroup.dto.request.SessionCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatSessionRes;
import com.pawsitive.chatgroup.dto.response.ChatTokenRes;
import com.pawsitive.common.exception.InvalidRequestDataException;
import io.openvidu.java.client.Connection;
import io.openvidu.java.client.ConnectionProperties;
import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.openvidu.java.client.Session;
import io.openvidu.java.client.SessionProperties;
import jakarta.annotation.PostConstruct;
import java.util.Map;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * @author 이하늬
 * @since 1.0
 */
@Service
@RequiredArgsConstructor
public class OpenviduServiceImpl implements OpenviduService {
    @Value("${OPENVIDU_URL}")
    private String OPENVIDU_URL;

    @Value("${OPENVIDU_SECRET}")
    private String OPENVIDU_SECRET;

    private OpenVidu openvidu;
    private final ChatRoomService chatRoomService;

    @PostConstruct
    public void init() {
        this.openvidu = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);
    }

    @Override
    public ChatSessionRes createSessions(SessionCreateReq sessionCreateReq)
        throws OpenViduJavaClientException, OpenViduHttpException {
        String sessionId = chatRoomService.getSessionId(sessionCreateReq.getChatRoomNo());
        if (sessionId != null) {
            return new ChatSessionRes(sessionId);
        }
        SessionProperties properties = new SessionProperties.Builder().build();
        Session session = openvidu.createSession(properties);
        chatRoomService.updateSessionId(sessionCreateReq.getChatRoomNo(), session.getSessionId());
        return new ChatSessionRes(session.getSessionId());
    }

    @Override
    public ChatTokenRes getToken(String sessionId, Map<String, Object> params)
        throws OpenViduJavaClientException, OpenViduHttpException {
        Session session = openvidu.getActiveSession(sessionId);
        if (Objects.isNull(session)) {
            throw new InvalidRequestDataException("유효하지 않은 sessionId입니다.");
        }
        ConnectionProperties properties = ConnectionProperties.fromJson(params).build();
        Connection connection = session.createConnection(properties);
        return new ChatTokenRes(connection.getToken());
    }

    @Override
    public String disconnectSessions(String sessionId)
        throws OpenViduJavaClientException, OpenViduHttpException {
        chatRoomService.deleteSessionId(sessionId);
        Session session = openvidu.getActiveSession(sessionId);
        if (session != null) {
            session.close();
        }
        return "성공";
    }
}
