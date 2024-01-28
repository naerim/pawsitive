package com.pawsitive.common.util;

import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

/**
 * @author 이하늬
 * @since 1.0
 */

@Component
public class ErrorMessageUtil {
    public String getErrorMessage(BindingResult bindingResult) {
        FieldError fieldError = bindingResult.getFieldError();
        return new StringBuilder("validation error. ")
            .append(" field : ").append(fieldError.getField())
            .append(", code : ").append(fieldError.getCodes())
            .append(", message : ").append(fieldError.getDefaultMessage())
            .toString();
    }
}
