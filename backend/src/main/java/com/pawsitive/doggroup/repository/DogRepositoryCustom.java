package com.pawsitive.doggroup.repository;

import com.pawsitive.doggroup.dto.response.DogDetailRes;
import com.pawsitive.doggroup.dto.response.DogListRes;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author 이하늬
 * @since 1.0
 */
@NoRepositoryBean
public interface DogRepositoryCustom {
    Optional<DogDetailRes> getDogByDogNo(int dogNo);

    List<DogListRes> getRecommendationDogList();

    List<DogListRes> getRecommendationDogList(int num);

    List<String> getDogFilesByDogNo(int dogNo);

    Page<DogListRes> getDogList(Pageable pageable, List<String> kind, Integer sex,
                                Integer neutralized);

    List<DogListRes> getDogListIn(List<Integer> dogList);

    Page<DogListRes> getDogListByKindNo(Pageable pageable, List<String> kind);

    List<DogListRes> getDogListByShelterNo(int shelterNo, Integer num, Integer status);

}
