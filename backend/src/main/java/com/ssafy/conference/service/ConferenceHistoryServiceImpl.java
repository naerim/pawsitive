package com.ssafy.conference.service;

import com.ssafy.conference.repository.ConferenceHistoryRepository;
import com.ssafy.user.entity.User;
import com.ssafy.user.repository.UserRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConferenceHistoryServiceImpl implements ConferenceHistoryService {
    private final ConferenceHistoryRepository conferenceHistoryRepository;
    private final UserRepository userRepository;

    @Override
    public void deleteConferenceHistoryUserId(String userId) {
        Optional<User> user = userRepository.findUserByUserId(userId);
        Long ownerId = user.get().getId();
        conferenceHistoryRepository.deleteByUserId(ownerId);
    }
}
