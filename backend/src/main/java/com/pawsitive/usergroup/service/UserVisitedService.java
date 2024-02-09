package com.pawsitive.usergroup.service;


import com.pawsitive.doggroup.entity.Dog;

public interface UserVisitedService {

    void removeTodayVisited();

    void updateMatrix(Dog dog);

}
