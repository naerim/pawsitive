package com.pawsitive.usergroup.service;


import com.pawsitive.usergroup.dto.response.MemberDogVisitListRes;
import java.util.List;

public interface MemberDogVisitService {

    void processVisit(int dogNo, int userNo);

    void removeTodayVisited();

    List<Double> getMatrixAsList(int userNo);

    MemberDogVisitListRes getVisitList(int userNo);

    int getMemberDogVisitCount(int userNo);
    
}
