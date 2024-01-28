package com.pawsitive.common.advisor;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.CONFLICT;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;

import com.pawsitive.common.dto.BaseResponseBody;
import com.pawsitive.common.util.ErrorMessageUtil;
import com.pawsitive.usergroup.exception.DuplicateIdException;
import com.pawsitive.usergroup.exception.InvalidPasswordException;
import com.pawsitive.usergroup.exception.UserNotFoundException;
import com.pawsitive.usergroup.exception.UserNotLoginException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * rest controller 에서 예외발생시 종합적인 처리를 해주기 위한 클래스입니다.
 */
@RestControllerAdvice
@RequiredArgsConstructor
public class RestControllerAdvisor {
    private final ErrorMessageUtil errorMessageUtil;

    /**
     * 유효하지 않은 데이터를 전달받았을 경우를 처리하기 위한 메소드입니다.
     *
     * @param e 실제 발생한 예외객체입니다.
     * @return 에러메세지를 response entity 에 담아서 전송합니다.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<BaseResponseBody> badRequestException400(
        MethodArgumentNotValidException e) {

        String msg = errorMessageUtil.getErrorMessage(e.getBindingResult());

        return ResponseEntity
            .status(BAD_REQUEST)
            .body(BaseResponseBody.of(BAD_REQUEST, msg));
    }

    /**
     * 400에 해당하는 예외들을 한번에 처리하는 메소드입니다.
     *
     * @param e 실제 발생한 예외객체입니다.
     * @return 에러메세지를 response entity 에 담아서 전송합니다.
     */
//    @ExceptionHandler(value = {InvalidRequestDataException.class})
//    public ResponseEntity<BaseResponseBody> badRequestException400(Exception e) {
//
//        return ResponseEntity
//            .status(BAD_REQUEST)
//            .body(BaseResponseBody.of(BAD_REQUEST, e.getMessage()));
//    }

    /**
     * 401에 해당하는 예외들을 한번에 처리하는 메소드입니다.
     *
     * @param e 실제 발생한 예외객체입니다.
     * @return 에러메세지를 response entity 에 담아서 전송합니다.
     */
    @ExceptionHandler(value = {InvalidPasswordException.class, UserNotLoginException.class})
    public ResponseEntity<BaseResponseBody> unauthorizedException401(Exception e) {

        return ResponseEntity.status(UNAUTHORIZED)
            .body(BaseResponseBody.of(UNAUTHORIZED, e.getMessage()));
    }

    /**
     * 403에 해당하는 예외들을 한번에 처리하는 메소드입니다.
     *
     * @param e 실제 발생한 예외객체입니다.
     * @return 에러메세지를 response entity 에 담아서 전송합니다.
     */
//  @ExceptionHandler(value = {})
//  public ResponseEntity<BaseResponseBody> forbiddenException403(RuntimeException e) {
//
//    return ResponseEntity
//        .status(FORBIDDEN)
//        .body(BaseResponseBody.of(FORBIDDEN, e.getMessage()));
//  }

    /**
     * 404에 해당하는 예외들을 한번에 처리하는 메소드입니다.
     *
     * @param e 실제 발생한 예외객체입니다.
     * @return 에러메세지를 response entity 에 담아서 전송합니다.
     */
    @ExceptionHandler(value = {UserNotFoundException.class})
    public ResponseEntity<BaseResponseBody> NotFoundException404(RuntimeException e) {

        return ResponseEntity.status(NOT_FOUND)
            .body(BaseResponseBody.of(NOT_FOUND, e.getMessage()));
    }

    /**
     * 409에 해당하는 예외들을 한번에 처리하는 메소드입니다.
     *
     * @param e 실제 발생한 예외객체입니다.
     * @return 에러메세지를 response entity 에 담아서 전송합니다.
     */
    @ExceptionHandler(value = {DuplicateIdException.class})
    public ResponseEntity<BaseResponseBody> ConflictException409(RuntimeException e) {

        return ResponseEntity.status(CONFLICT).body(BaseResponseBody.of(CONFLICT, e.getMessage()));
    }


    /**
     * 500에 해당하는 예외들을 한번에 처리하는 메소드입니다.
     *
     * @param e 실제 발생한 예외객체입니다.
     * @return 에러메세지를 response entity 에 담아서 전송합니다.
     */
    @ExceptionHandler(value = {RuntimeException.class, Exception.class})
    public ResponseEntity<BaseResponseBody> internalErrorException500(Exception e) {

        e.printStackTrace();

        return ResponseEntity.status(INTERNAL_SERVER_ERROR)
            .body(BaseResponseBody.of(INTERNAL_SERVER_ERROR, e.getMessage()));
    }

}
