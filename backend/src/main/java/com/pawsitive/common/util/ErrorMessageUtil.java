package com.pawsitive.common.util;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

/**
 * @author 이하늬
 * @since 1.0
 */
@Component
public class ErrorMessageUtil {
    @AllArgsConstructor
    static class Error {
        private String field;
        private String message;

        @Override
        public String toString() {
            return "{" +
                "field='" + field + '\'' +
                ", message='" + message + '\'' +
                '}';
        }
    }

    public String getErrorMessage(BindingResult bindingResult) {
        List<Error> errList = new ArrayList<>();
        bindingResult.getAllErrors().forEach((error) -> {
            String field = ((FieldError) error).getField();
            String errMsg = error.getDefaultMessage();
            errList.add(new Error(field, errMsg));
        });
        return errList.toString();
    }
}
