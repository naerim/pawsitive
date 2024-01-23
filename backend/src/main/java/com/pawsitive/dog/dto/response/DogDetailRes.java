package com.pawsitive.dog.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class DogDetailRes {

    private String name;
    private String shelter;
    private String neutralized;
    private String description;

}
