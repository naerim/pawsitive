package com.pawsitive.usergroup.service;

import com.pawsitive.common.service.RedisService;
import com.pawsitive.doggroup.dogenum.DogKindEnum;
import com.pawsitive.doggroup.dogenum.DogSexEnum;
import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.MemberDogMatrix;
import com.pawsitive.usergroup.entity.MemberDogVisit;
import com.pawsitive.usergroup.repository.MemberDogMatrixRepository;
import com.pawsitive.usergroup.repository.MemberDogVisitRepository;
import com.pawsitive.usergroup.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service("memberDogVisitService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class MemberDogVisitServiceImpl implements MemberDogVisitService {

    private final MemberDogVisitRepository memberDogVisitRepository;
    private final MemberDogMatrixRepository memberDogMatrixRepository;

    private final MemberRepository memberRepository;
    private final DogRepository dogRepository;

    private final RedisService redisService;

    private final String TODAY_VISITED_USER_KEY = "Today Visited";
    private final String USER_VISITED_LIST_PREFIX = "Visited ";

    private final Double MATRIX_MAX_VALUE = 15.0;

    @Transactional
    @Override
    public void processVisit(int dogNo, int userNo) {

        String userVisitedKey = USER_VISITED_LIST_PREFIX + userNo; // 유저 별 방문 리스트 Key 값 (prefix + 유저 고유번호)
        boolean haveToInsert = true;

        if (redisService.checkList(TODAY_VISITED_USER_KEY, userNo)) { // 해당 유저가 오늘 방문한 기록이 있으면
            if (redisService.checkList(userVisitedKey, dogNo)) { // 만약 유저 별 방문 리스트에 해당 강아지가 있으면
                haveToInsert = false; // 조회 미처리 (테이블에 저장하지 않기)
            }
        } else { // 오늘 방문자 리스트에 해당 유저가 없다면
            redisService.addList(TODAY_VISITED_USER_KEY, userNo); // 오늘 방문 리스트에 해당 유저 추가
        }

        if (haveToInsert) {
            redisService.addList(userVisitedKey, dogNo); // 오늘 방문 기록에 강아지 추가

            // DB 테이블에 MemberDogVisit 생성 후 저장
            Member member = memberRepository.findMemberByUserNo(userNo).orElseThrow();
            Dog dog = dogRepository.findByDogNo(dogNo).orElseThrow();

            memberDogVisitRepository.save(MemberDogVisit.builder()
                .member(member)
                .dog(dog)
                .build());

            // MemberDogMatrix 갱신을 위해 가져오기 (없으면 생성)
            MemberDogMatrix memberDogMatrix = memberDogMatrixRepository
                .getMemberDogMatrixByUserNo(userNo)
                .orElse(MemberDogMatrix.builder()
                    .user(member.getUser())
                    .userNo(member.getUserNo())
                    .build());

            // 1. 조회한 유기견 공고를 행렬로 만들기
            // 2. 해당 행렬 정규화 (0~1 사이 값 가지게 MATRIX_MAX_VALUE로 나누기)
            // 3. ((원래 필드 값 * 원래 count) + 새로운 행렬) / (원래 count + 1) 한 값을 적용하기
            int originalCount = memberDogMatrix.getMemberDogCount();
            List<Double> mbtis = mbtiToDouble(dog.getMbti().toCharArray());

            memberDogMatrix.setKind(calculateNewValue(memberDogMatrix.getKind(), DogKindEnum.valueOf(dog.getKind()).getNo() * 1.0, originalCount));
            memberDogMatrix.setNeutralized(calculateNewValue(memberDogMatrix.getNeutralized(), dog.isNeutralized() ? 1.0 : 0.0, originalCount));
            memberDogMatrix.setAge(calculateNewValue(memberDogMatrix.getAge(), dog.getAge() * 1.0, originalCount));
            memberDogMatrix.setSex(calculateNewValue(memberDogMatrix.getSex(), DogSexEnum.valueOf(dog.getSex()).getNo() * 1.0, originalCount));
            memberDogMatrix.setEq(calculateNewValue(memberDogMatrix.getEq(), mbtis.get(0), originalCount));
            memberDogMatrix.setEq(calculateNewValue(memberDogMatrix.getSi(), mbtis.get(1), originalCount));
            memberDogMatrix.setEq(calculateNewValue(memberDogMatrix.getAw(), mbtis.get(2), originalCount));
            memberDogMatrix.setEq(calculateNewValue(memberDogMatrix.getFc(), mbtis.get(3), originalCount));

            memberDogMatrix.setMemberDogCount(originalCount + 1);

            // 4. DB에 저장
            memberDogMatrixRepository.save(memberDogMatrix);
        }

    }


    @Scheduled(cron = "0 0 0 * * *")
    @Transactional
    @Override
    public void removeTodayVisited() {
        log.info("MemberDogVisitService : removeTodayVisited executed");

        List<Object> todayVisitedUserList = redisService.getList(TODAY_VISITED_USER_KEY);

        // 오늘 한 공고라도 본 유저의 리스트를 순회하며, 그 유저의 오늘 방문 기록을 지움
        for (Object u : todayVisitedUserList) {
            String key = USER_VISITED_LIST_PREFIX + u;
            redisService.removeList(key);
        }
    }

    private Double calculateNewValue(Double oldValue, Double newValue, int originalCount) {
        return (oldValue * originalCount + newValue / MATRIX_MAX_VALUE) / (originalCount + 1);
    }

    private List<Double> mbtiToDouble(char[] mbti) {
        List<Double> list = new ArrayList<>();
        list.add(mbti[0] == 'E' ? 1.0 : 0.0);
        list.add(mbti[1] == 'S' ? 1.0 : 0.0);
        list.add(mbti[2] == 'A' ? 1.0 : 0.0);
        list.add(mbti[3] == 'F' ? 1.0 : 0.0);

        return list;
    }

}
