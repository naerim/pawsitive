package com.pawsitive.doggroup.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

/**
 * @author 이하늬
 * @since 1.0
 */
@Getter
@AllArgsConstructor
public class DogCreateReq {
    @NotNull(message = "userNo can't be null")
    private int userNo;

    @NotNull(message = "name can't be null")
    private String name;

    @NotNull(message = "kind can't be null")
    private String kind;

    @NotNull(message = "isNaturalized can't be null")
    private Boolean isNaturalized;

    @NotNull(message = "color can't be null")
    private String color;

    @Length(max = 500)
    private String note;

    @NotNull(message = "eq can't be null")
    private Boolean eq;

    @NotNull(message = "si can't be null")
    private Boolean si;

    @NotNull(message = "aw can't be null")
    private Boolean aw;

    @NotNull(message = "fc can't be null")
    private Boolean fc;

}
