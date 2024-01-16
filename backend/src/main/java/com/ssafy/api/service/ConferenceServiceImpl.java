package com.ssafy.api.service;

import com.ssafy.db.entity.User;
import com.ssafy.db.repository.ConferenceRepository;
import com.ssafy.db.repository.UserRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConferenceServiceImpl implements ConferenceService {
    private final ConferenceRepository conferenceRepository;
    private final UserRepository userRepository;

    @Override
    public void deleteConferenceByUserId(String userId) {
        Optional<User> user = userRepository.findUserByUserId(userId);
        Long ownerId = user.get().getId();
        conferenceRepository.deleteByOwnerId(ownerId);
    }
}
