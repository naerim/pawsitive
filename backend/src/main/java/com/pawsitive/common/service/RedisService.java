package com.pawsitive.common.service;

import java.time.Duration;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * Redis 관련 값 설정 Service 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Slf4j
@Component
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RedisService {

    private final RedisTemplate<String, Object> redisTemplate;

    @Transactional
    public void setValues(String key, String data) {
        ValueOperations<String, Object> values = redisTemplate.opsForValue();
        values.set(key, data);
    }

    @Transactional
    public void setValues(String key, String data, Duration duration) {
        ValueOperations<String, Object> values = redisTemplate.opsForValue();
        values.set(key, data, duration);
    }

    public String getValues(String key) {
        ValueOperations<String, Object> values = redisTemplate.opsForValue();
        if (Objects.isNull(values.get(key))) {
            return "false";
        }
        return (String) values.get(key);
    }

    @Transactional
    public void deleteValues(String key) {
        redisTemplate.delete(key);
    }

    @Transactional
    public void expireValues(String key, int timeout) {
        redisTemplate.expire(key, timeout, TimeUnit.MILLISECONDS);
    }

    @Transactional
    public void setHashOps(String key, Map<String, String> data) {
        HashOperations<String, Object, Object> values = redisTemplate.opsForHash();
        values.putAll(key, data);
    }

    public String getHashOps(String key, String hashKey) {
        HashOperations<String, Object, Object> values = redisTemplate.opsForHash();
        return Boolean.TRUE.equals(values.hasKey(key, hashKey))
            ? (String) redisTemplate.opsForHash().get(key, hashKey) : "";
    }

    @Transactional
    public void deleteHashOps(String key, String hashKey) {
        HashOperations<String, Object, Object> values = redisTemplate.opsForHash();
        values.delete(key, hashKey);
    }

    public boolean checkExistsValue(String value) {
        return !value.equals("false");
    }

    private List<Object> getListObject(String key) {
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        int listSize = getListSize(key);

        if (listSize == 0) {
            return Collections.emptyList();
        }

        return listOperations.range(key, 0, listSize);
    }

    /**
     * key 값에 해당하는 list 내의 no 존재여부를 체크하는 메서드입니다.
     *
     * @param key List의 Redis 키 값
     * @param no  확인할 값 (정수)
     * @return 값이 존재한다면 true, 존재하지 않으면 false
     */
    public boolean checkList(String key, Integer no) {
        List<Object> list = getListObject(key);

        if (Objects.isNull(list) || list.isEmpty()) {
            return false;
        }

        for (Object o : list) {
            int listNum = Integer.parseInt(String.valueOf(o));
            if (no == listNum) {
                return true;
            }
        }

        return false;
    }

    /**
     * key 값에 해당하는 list 내의 문자열의 존재여부를 체크하는 메서드입니다.
     *
     * @param key List의 Redis 키 값
     * @param str 확인할 값 (String)
     * @return 값이 존재한다면 true, 존재하지 않으면 false
     */
    public boolean checkList(String key, String str) {
        List<Object> list = getListObject(key);

        if (Objects.isNull(list) || list.isEmpty()) {
            return false;
        }

        for (Object o : list) {
            if (String.valueOf(o).equals(str)) {
                return true;
            }
        }

        return false;
    }

    /**
     * key 값에 해당하는 list에 값을 추가하는 메서드입니다.
     *
     * @param key List의 Redis 키 값
     * @param no  추가할 값 (정수)
     */
    @Transactional
    public void addList(String key, Integer no) {
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        listOperations.rightPush(key, no);
    }

    /**
     * key 값에 해당하는 list에 값을 반환하는 메서드입니다.
     *
     * @param key List의 Redis 키 값
     * @return 해당 key값에 해당하는 리스트
     */
    public List<Object> getList(String key) {
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        int listSize = getListSize(key);

        return listOperations.range(key, 0, listSize);
    }

    /**
     * 리스트를 지우는 연산을 수행하는 메서드입니다.
     *
     * @param key List의 Redis 키 값
     */
    // @Scheduled(cron = "0 0 0 * * *")
    public void removeList(String key) {
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        int listSize = getListSize(key);

        for (int i = 0; i < listSize; i++) {
            listOperations.leftPop(key);
        }
    }

    private int getListSize(String key) {
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        if (!Objects.isNull(listOperations.size(key))) {
            return Math.toIntExact(listOperations.size(key));
        }

        return 0;
    }

}