package com.ssafy.api.service;

import com.ssafy.db.entity.User;
import com.ssafy.db.repository.ConferenceHistoryRepository;
import com.ssafy.db.repository.UserRepository;
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
