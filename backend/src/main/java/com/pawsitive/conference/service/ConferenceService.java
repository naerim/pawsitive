package com.pawsitive.conference.service;

/**
 * Conference 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface ConferenceService {
    void deleteConferenceByUserId(String userId);
}
