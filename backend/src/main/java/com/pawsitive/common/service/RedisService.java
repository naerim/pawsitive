package com.pawsitive.common.service;

import java.time.Duration;
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

    @Transactional
    public void addVisited(String key, Integer no) {
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        listOperations.rightPush(key, no);
    }

    public List<Object> getList(String key) {
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        int listSize = getListSize(key);

        return listOperations.range(key, 0, listSize);
    }

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
        return Math.toIntExact(listOperations.size(key));
    }

}