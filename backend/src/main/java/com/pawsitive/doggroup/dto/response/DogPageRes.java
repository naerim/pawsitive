package com.pawsitive.doggroup.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class DogPageRes {

    List<DogDetailRes> content;
    int pageNumber;
    int pageSize;
    int totalPages;
    int totalElements;

}
