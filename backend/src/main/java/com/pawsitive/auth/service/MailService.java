package com.pawsitive.auth.service;

import com.pawsitive.auth.exception.MailNotSendException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 이메일을 보내는 기능을 구현한 서비스 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MailService {

    private final JavaMailSender javaMailSender;

    /**
     * 매개변수로 들어온 이메일, 제목, 내용으로 이메일을 보내는 메서드입니다.
     *
     * @param toEmail 메일을 보낼 주소
     * @param title   제목
     * @param text    내용
     */
    public void sendEmail(String toEmail, String title, String text) {
        SimpleMailMessage emailForm = createEmailForm(toEmail, title, text);
        try {
            javaMailSender.send(emailForm);
        } catch (RuntimeException e) {
            log.debug("MailService.sendEmail exception occur toEmail: {}, title: {}, text: {}",
                toEmail, title, text);
            throw new MailNotSendException();
        }
    }

    private SimpleMailMessage createEmailForm(String toEmail, String title, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject(title);
        message.setText(text);

        return message;
    }

}
