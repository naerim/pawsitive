package com.pawsitive.auth.service;

import com.pawsitive.auth.CustomUserDetails;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.exception.UserNotFoundException;
import com.pawsitive.usergroup.repository.MemberRepository;
import com.pawsitive.usergroup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


/**
 * 현재 액세스 토큰으로 부터 인증된 유저의 상세정보(활성화 여부, 만료, 롤 등) 관련 서비스 정의.
 */
@Component
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user =
            userRepository.findUserByEmail(email).orElseThrow(UserNotFoundException::new);

        return new CustomUserDetails(user);
    }

}
