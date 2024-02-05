package com.pawsitive.auth.filter;

import com.pawsitive.auth.jwt.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

/**
 * 요청 헤더에 jwt 토큰이 있는 경우, 토큰 검증 및 인증 처리 로직 정의.
 */
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;

    /**
     * JWT 인증 로직을 수행하는 필터 메서드입니다.
     *
     * @param servletRequest  Servlet 요청 객체
     * @param servletResponse Servlet 응답 객체
     * @param filterChain     필터체인 객체
     */
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {
        // Request Header에서 토큰 추출
        String token =
            resolveToken((HttpServletRequest) servletRequest).orElseThrow(RuntimeException::new);

        // validateToken 메서드로 유효성 검사
        if (jwtTokenProvider.validateToken(token)) {
            // 유효하다면 Token에서 Authentication 정보를 가져와 SecurityContext에 저장
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }

    // Request Header에서 토큰 정보 추출
    private Optional<String> resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer")) {
            return Optional.of(bearerToken.substring(7));
        }

        return Optional.empty();
    }

}
