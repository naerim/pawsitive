package com.ssafy.conference.service;

import com.ssafy.conference.repository.ConferenceRepository;
import com.ssafy.user.entity.User;
import com.ssafy.user.repository.UserRepository;
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
