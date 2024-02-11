package com.pawsitive.usergroup.service;

import com.pawsitive.common.service.RedisService;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.usergroup.repository.MemberDogMatrixRepository;
import com.pawsitive.usergroup.repository.MemberDogVisitRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("userVisitedService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class UserVisitedServiceImpl implements UserVisitedService {

    private final MemberDogVisitRepository memberDogVisitRepository;
    private final MemberDogMatrixRepository memberDogMatrixRepository;

    private final RedisService redisService;

    private final String TODAY_VISITED_USER_KEY = "Today Visited";
    private final String USER_VISITED_LIST_PREFIX = "Visited ";

    @Scheduled(cron = "0 0 0 * * *")
    @Transactional
    @Override
    public void removeTodayVisited() {
        List<Object> todayVisitedUserList = redisService.getList(TODAY_VISITED_USER_KEY);

        // 오늘 한 공고라도 본 유저의 리스트를 순회하며, 그 유저의 오늘 방문 기록을 지움
        for (Object u : todayVisitedUserList) {
            String key = USER_VISITED_LIST_PREFIX + u;
            redisService.removeList(key);
        }
    }

//    @Override
//    @Transactional
//    public boolean manageVisited(String email, )

    @Transactional
    @Override
    public void updateMatrix(Dog dog) {
        //
    }

//    private


}
