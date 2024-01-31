package com.pawsitive.doggroup.dto.response;

import com.pawsitive.doggroup.entity.Dog;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class DogPageRes {

    List<Dog> content;
    int currentPage;
    int totalPages;
    int pageSize;
    int totalElements;

}
