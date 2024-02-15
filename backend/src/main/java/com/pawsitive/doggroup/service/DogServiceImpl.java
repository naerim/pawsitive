package com.pawsitive.doggroup.service;


import com.pawsitive.common.exception.NotSavedException;
import com.pawsitive.doggroup.dogenum.DogKindEnum;
import com.pawsitive.doggroup.dogenum.DogSexEnum;
import com.pawsitive.doggroup.dogenum.DogStatusEnum;
import com.pawsitive.doggroup.dto.request.DogCreateReq;
import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.dto.response.DogListRes;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.exception.DogNotFoundException;
import com.pawsitive.doggroup.repository.DogRepository;
import com.pawsitive.doggroup.transfer.DogTransfer;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.exception.UserNotLoginException;
import com.pawsitive.usergroup.repository.MemberDogLikeRepository;
import com.pawsitive.usergroup.repository.UserRepository;
import com.pawsitive.usergroup.service.MemberDogVisitService;
import com.pawsitive.usergroup.service.UserService;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;


/**
 * DogService 구현 클래스입니다.
 *
 * @author 이하늬
 * @since 1.0
 */
@Service("dogService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class DogServiceImpl implements DogService {
    private final UserRepository userRepository;

    private final MemberDogLikeRepository memberDogLikeRepository;
    private final DogRepository dogRepository;

    private final UserService userService;
    private final DogFileService dogFileService;
    private final MemberDogVisitService memberDogVisitService;

    private final Double MATRIX_MAX_VALUE = 15.0;

    @Override
    @Transactional
    public DogDetailRes createDog(DogCreateReq req, MultipartFile[] files) {
        User user = userService.getUserByUserNo(req.getUserNo());

        Dog dog = Dog.builder().user(user).name(req.getName()).kind(req.getKind())
            .isNeutralized(req.getIsNaturalized()).note(req.getNote()).mbti(getMbti(req))
            .status(DogStatusEnum.TODO).sex(req.getSex()).age(req.getAge()).build();

        Dog savedDog;
        try {
            savedDog = dogRepository.save(dog);
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new NotSavedException();
        }

        List<String> fileKeys = dogFileService.createDogFiles(savedDog, files);

        return DogTransfer.entityToDto(savedDog, fileKeys);
    }

    @Override
    @Transactional
    public DogDetailRes getDogByDogNo(int dogNo, Authentication authentication) {
        // 엔티티 객체 가져오기
        Dog dog = dogRepository.findByDogNo(dogNo).orElseThrow(DogNotFoundException::new);

        String email = null;
        Integer userNo = null;

        // Authentication에서 권한 확인
        if (!Objects.isNull(authentication)) {
            UserDetails user = (UserDetails) authentication.getPrincipal();
            email = user.getUsername();
            userNo = userRepository.findUserNoByEmail(email);
        }

        // 로그인 된 유저일 때 조회수 테이블 처리
        if (!Objects.isNull(email)) {
            memberDogVisitService.processVisit(dogNo, userNo);
        }

        // 조회수 증가
        int hit = dog.getHit() + 1;
        dog.setHit(hit);

        // 조회수 저장 반영
        dogRepository.save(dog);

        DogDetailRes res = DogTransfer.entityToDto(dog);

        // 좋아요 여부 갱신
        if (!Objects.isNull(userNo) &&
            !Objects.isNull(memberDogLikeRepository.getUserDogLiked(dogNo, userNo))) {
            res.setUserLiked(true);
        }

        // Res 객체 만들기
        return res;
    }

    @Transactional
    @Override
    public DogDetailRes getDogByDogNo(int dogNo, Integer userNo) {
        Dog dog = dogRepository.findByDogNo(dogNo).orElseThrow(DogNotFoundException::new);

        memberDogVisitService.processVisit(dogNo, userNo);

        int hit = dog.getHit() + 1;
        dog.setHit(hit);

        dogRepository.save(dog);

        DogDetailRes res = DogTransfer.entityToDto(dog);

        if (!Objects.isNull(memberDogLikeRepository.getUserDogLiked(dogNo, userNo))) {
            res.setUserLiked(true);
        }

        return res;
    }

    @Override
    @Transactional
    public Dog updateStatus(int dogNo, DogStatusEnum dogStatusEnum) {
        Dog dog = getDogEntityByDogNo(dogNo);
        dog.setStatus(dogStatusEnum);
        return dogRepository.save(dog);
    }

    @Override
    public Dog getDogEntityByDogNo(int dogNo) {
        return dogRepository.findByDogNo(dogNo).orElseThrow(DogNotFoundException::new);
    }

    @Override
    public List<DogListRes> getRecommendationDogListByUserNo(Authentication authentication) {

        if (Objects.isNull(authentication)) { // 인증 정보가 없으면 예외처리
            throw new UserNotLoginException();
        }

        UserDetails user = (UserDetails) authentication.getPrincipal();
        String email = user.getUsername();
        Integer userNo = userRepository.findUserNoByEmail(email);

        // MemberDogMatrix 가져오기
        List<Double> memberDogMatrix = memberDogVisitService.getMatrixAsList(userNo);

        // 전체 dog List 가져오기
        List<DogListRes> dogList = dogRepository.getRecommendationDogList();

        // DogListRes를 List<Double> 타입으로 변환하기
        List<List<Double>> dogMatrixList = new ArrayList<>();

        for (DogListRes res : dogList) {
            dogMatrixList.add(dogListResToMatrix(res));
        }

        // MSD 계산해서 최소값 2개만 가지고 있는 List를 반환하기
        List<DogListRes> recommendedDogs = getMinMSDDogs(memberDogMatrix, dogMatrixList);
        setThumbnailImage(recommendedDogs);

        return recommendedDogs;
    }

    @Override
    public List<DogListRes> getMonthlyDogList(Integer num) {
        List<DogListRes> dogList;
        if (Objects.isNull(num)) {
            dogList = dogRepository.getRecommendationDogList();
        } else {
            dogList = dogRepository.getRecommendationDogList(num);
        }
        setThumbnailImage(dogList);
        return dogList;
    }

    @Override
    public List<DogListRes> getRecommendationDogListByUserNo(Integer userNo) {

        int visitedCount = memberDogVisitService.getMemberDogVisitCount(userNo);
        log.info("DogService : visitedCount = {}", visitedCount);

        if (visitedCount == 0) {
            List<Integer> dogNoList = dogRepository.getEntireDogNoList();
            log.info("DogService : dogNoList = {}", dogNoList.toString());

            Random random;

            try {
                random = SecureRandom.getInstanceStrong();
            } catch (NoSuchAlgorithmException e) {
                throw new RuntimeException(e);
            }

            List<Integer> idxList = new ArrayList<>();
            idxList.add(random.nextInt(dogNoList.size()));
            idxList.add(random.nextInt(dogNoList.size()));

            log.info("DogService : idxList = {}", idxList);

            List<DogListRes> dogListRes = dogRepository.getDogListIn(
                List.of(dogNoList.get(idxList.get(0)), dogNoList.get(idxList.get(1))));
            setThumbnailImage(dogListRes);

            return dogListRes;
        }

        // MemberDogMatrix 가져오기
        List<Double> memberDogMatrix = memberDogVisitService.getMatrixAsList(userNo);

        // 전체 dog List 가져오기
        List<DogListRes> dogList = dogRepository.getRecommendationDogList();

        // DogListRes를 List<Double> 타입으로 변환하기
        List<List<Double>> dogMatrixList = new ArrayList<>();

        for (DogListRes res : dogList) {
            dogMatrixList.add(dogListResToMatrix(res));
        }

        // MSD 계산해서 최소값 2개만 가지고 있는 List를 반환하기
        List<DogListRes> recommendedDogs = getMinMSDDogs(memberDogMatrix, dogMatrixList);
        setThumbnailImage(recommendedDogs);

        return recommendedDogs;
    }

    @Override
    public DogListRes getSingleRecommendationDog(Integer userNo) {
        int visitedCount = memberDogVisitService.getMemberDogVisitCount(userNo);

        if (visitedCount == 0) {
            List<Integer> dogNoList = dogRepository.getEntireDogNoList();
            int randomIdx = 0;
            try {
                randomIdx = SecureRandom.getInstanceStrong().nextInt(dogNoList.size());
            } catch (NoSuchAlgorithmException e) {
                throw new RuntimeException(e);
            }

            Dog dog = dogRepository.findByDogNo(dogNoList.get(randomIdx)).orElseThrow();

            return DogListRes.builder()
                .dogNo(dog.getDogNo())
                .name(dog.getName())
                .kind(dog.getKind())
                .isNeutralized(dog.isNeutralized())
                .age(dog.getAge())
                .statusNo(dog.getStatus().getNo())
                .file(dog.getFiles().get(0).getFile())
                .sex(dog.getSex())
                .userLiked(false)
                .mbti(dog.getMbti())
                .build();
        }


        // MemberDogMatrix 가져오기
        List<Double> memberDogMatrix = memberDogVisitService.getMatrixAsList(userNo);

        // 전체 dog List 가져오기
        List<DogListRes> dogList = dogRepository.getRecommendationDogList();

        // DogListRes를 List<Double> 타입으로 변환하기
        List<List<Double>> dogMatrixList = new ArrayList<>();

        for (DogListRes res : dogList) {
            dogMatrixList.add(dogListResToMatrix(res));
        }

        // MSD 계산해서 최소값 2개만 가지고 있는 List를 반환하기
        List<DogListRes> recommendedDogs = getMinMSDDogs(memberDogMatrix, dogMatrixList);
        setThumbnailImage(recommendedDogs);

        return recommendedDogs.get(0);
    }

    private List<DogListRes> getMinMSDDogs(List<Double> memberDogMatrix,
                                           List<List<Double>> dogMatrixList) {
        Collections.sort(dogMatrixList,
            (o1, o2) -> Double.compare(MSD(memberDogMatrix, o1), MSD(memberDogMatrix, o2)));

        List<Integer> dogNoList = new ArrayList<>();
        dogNoList.add(dogMatrixList.get(0).get(8).intValue());
        dogNoList.add(dogMatrixList.get(1).get(8).intValue());

        log.info("DogService : MSD 1 = {}, MSD 2 = {}", MSD(memberDogMatrix, dogMatrixList.get(0)),
            MSD(memberDogMatrix, dogMatrixList.get(1)));

        return dogRepository.getDogListIn(dogNoList);
    }

    private double MSD(List<Double> m1, List<Double> m2) {
        double result = 0.0;

        for (int i = 0; i < 8; i++) {
            result += Math.pow((m1.get(i) - m2.get(i)), 2);
        }

        return result / 8;
    }

    private List<Double> dogListResToMatrix(DogListRes res) {
        List<Double> list = new ArrayList<>();

        list.add(DogKindEnum.stringToInt(res.getKind()) / MATRIX_MAX_VALUE);
        list.add(res.isNeutralized() ? 1.0 / MATRIX_MAX_VALUE : 0.0);
        list.add(res.getAge() / MATRIX_MAX_VALUE);
        list.add(DogSexEnum.stringToInt(res.getSex()) / MATRIX_MAX_VALUE);
        list.addAll(mbtiToDouble(res.getMbti().toCharArray()));

        // 마지막에 dogNo를 넣어주기 (어떤 강아지인지 식별하기 위함)
        list.add(res.getDogNo() * 1.0);

        return list;
    }

    private List<Double> mbtiToDouble(char[] mbti) {
        List<Double> list = new ArrayList<>();
        list.add(mbti[0] == 'E' ? 1.0 / MATRIX_MAX_VALUE : 0.0);
        list.add(mbti[1] == 'S' ? 1.0 / MATRIX_MAX_VALUE : 0.0);
        list.add(mbti[2] == 'A' ? 1.0 / MATRIX_MAX_VALUE : 0.0);
        list.add(mbti[3] == 'F' ? 1.0 / MATRIX_MAX_VALUE : 0.0);

        return list;
    }

    @Override
    public Page<DogListRes> getDogList(Pageable pageable, List<String> kind, Integer sex,
                                       Integer neutralized, Authentication authentication) {

        Page<DogListRes> dogList =
            dogRepository.getDogList(pageable, kind, sex, neutralized);
        setThumbnailImage(dogList);

        if (!Objects.isNull(authentication)) {
            UserDetails user = (UserDetails) authentication.getPrincipal();
            String email = user.getUsername();
            Integer userNo = userRepository.findUserNoByEmail(email);

            log.warn("DogService : user = {}, email = {}, userNo = {}", user.toString(), email,
                userNo.toString());

            setLiked(dogList, memberDogLikeRepository.getLikedDogList(userNo));
        }

        return dogList;
    }

    @Override
    public Page<DogListRes> getDogList(Pageable pageable, List<String> kind, Integer sex,
                                       Integer neutralized, Integer userNo) {

        if (kind == null && (sex != null || neutralized != null)) {
            return new PageImpl<>(List.of(), pageable, 0);
        }

        Page<DogListRes> dogList =
            dogRepository.getDogList(pageable, kind, sex, neutralized);

        setThumbnailImage(dogList);

        if (userNo != null) {
            setLiked(dogList, memberDogLikeRepository.getLikedDogList(userNo));
        }
        return dogList;
    }

    @Override
    public List<DogListRes> getDogListByShelterNo(int shelterNo, Integer num, Integer status) {
        List<DogListRes> dogList = dogRepository.getDogListByShelterNo(shelterNo, num, status);
        setThumbnailImage(dogList);
        return dogList;
    }

    private void setLiked(Iterable<DogListRes> dogList, List<Integer> likedList) {

        if (likedList.isEmpty()) {
            return;
        }

        for (DogListRes dog : dogList) {
            boolean flag = false;
            for (Integer liked : likedList) {
                if (dog.getDogNo() == liked) {
                    dog.setUserLiked(true);
                    flag = true;
                }

                if (flag) {
                    break;
                }
            }
        }
    }

    private void setThumbnailImage(Iterable<DogListRes> dogList) {
        for (DogListRes dog : dogList) {
            List<String> files = dogRepository.getDogFilesByDogNo(dog.getDogNo());
            if (!files.isEmpty()) {
                dog.setFile(files.get(0));
            }
        }
    }

    private String getMbti(DogCreateReq req) {
        StringBuilder sb = new StringBuilder();
        String tmp;
        tmp = Boolean.TRUE.equals(req.getEq()) ? "E" : "Q";
        sb.append(tmp);
        tmp = Boolean.TRUE.equals(req.getSi()) ? "S" : "I";
        sb.append(tmp);
        tmp = Boolean.TRUE.equals(req.getAw()) ? "A" : "W";
        sb.append(tmp);
        tmp = Boolean.TRUE.equals(req.getFc()) ? "F" : "C";
        sb.append(tmp);
        return sb.toString();
    }


}
