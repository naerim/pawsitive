package com.pawsitive.common.dto.response;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

@NoArgsConstructor
@Getter
public class PageResponse<T> {

    private List<T> content;

    private int totalPages;

    private int number;

    private boolean previous;

    private boolean next;

    public PageResponse(Page<T> result) {

        this.content = result.getContent();

        this.totalPages = result.getTotalPages();

        this.number = result.getNumber();

        this.previous = result.hasPrevious();

        this.next = result.hasNext();
    }
}