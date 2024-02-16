package com.pawsitive.communitygroup.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

@AllArgsConstructor
@Getter
@ToString
public class CommunityUpdateReq {

    private int userNo;

    @Length(max = 100)
    private String title;

    @Length(max = 500)
    private String content;

    @NotNull
    private Boolean isPublic;

    private double latitude;

    private double longitude;

    private int categoryNo;
}
