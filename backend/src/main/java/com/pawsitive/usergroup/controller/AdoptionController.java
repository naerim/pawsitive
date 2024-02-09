package com.pawsitive.usergroup.controller;

import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.doggroup.service.AdoptDogService;
import com.pawsitive.usergroup.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "11.Adoption")
@RestController
@RequestMapping("/api/v1/adoptation-process")
@RequiredArgsConstructor
@Slf4j
public class AdoptionController {

    private final UserService userService;
    private final AdoptDogService adoptDogService;

    @PostMapping("/form")
    public ResponseEntity<BaseResponseBody> submitForm() {
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "성공"));
    }

    @PostMapping("/adopt")
    public ResponseEntity<BaseResponseBody> adoptDog() {
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "성공"));
    }

    @PostMapping("/like")
    public ResponseEntity<BaseResponseBody> likeDog() {
        return ResponseEntity
            .status(OK)
            .body(BaseResponseBody.of(OK, "성공"));
    }


}
