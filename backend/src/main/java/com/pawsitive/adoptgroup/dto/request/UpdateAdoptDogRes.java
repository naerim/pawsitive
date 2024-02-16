package com.pawsitive.adoptgroup.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author 이하늬
 * @since 1.0
 */
@AllArgsConstructor
@Getter
public class UpdateAdoptDogRes {
    private String name;
    private Double weight;
    private Integer age;
}
