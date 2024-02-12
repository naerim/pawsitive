package com.pawsitive.usergroup.service;


import com.pawsitive.doggroup.entity.Dog;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MemberDogVisitService {

    void processVisit(int dogNo, int userNo);

    void removeTodayVisited();

    List<Double> getMatrixAsList(int userNo);

}
