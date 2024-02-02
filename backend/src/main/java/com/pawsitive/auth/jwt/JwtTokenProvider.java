package com.pawsitive.auth.jwt;

import com.pawsitive.auth.exception.JwtAuthenticationProcessingException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

/**
 * JWT Token 관련 기능을 제공하는 클래스입니다.
 *
 * @author 천세진
 * @since 1.0
 */
@Slf4j
@Component
public class JwtTokenProvider {

    private final Key key;
    
    public JwtTokenProvider(@Value("${jwt.secret}") String secretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    /**
     * 인증 객체를 통해 인증한 뒤, JWT Token을 생성하는 메서드입니다.
     *
     * @param authentication 인증 정보 객체
     * @return JwtToken 객체
     */
    public JwtToken generateToken(Authentication authentication) {

        // 권한 가져오기
        String authorities = authentication.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));

        long now = new Date().getTime();

        Date accessTokenExpires = new Date(now + 1000 * 60 * 60); // 1시간

        // accessToken 생성
        String accessToken = Jwts.builder()
            .setSubject(authentication.getName())
            .claim("auth", authorities)
            .setExpiration(accessTokenExpires)
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();

        // refreshToken 생성
        String refreshToken = Jwts.builder()
            .setExpiration(new Date(now + 1000 * 60 * 60 * 24)) // 1일
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();

        return JwtToken.builder()
            .grantType("Bearer")
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .build();

    }

    /**
     * Access Token을 통해 Authentication 정보를 가져오는 메서드입니다.
     *
     * @param accessToken Jwt Access Token
     * @return 인증 객체
     */
    public Authentication getAuthentication(String accessToken) {
        Claims claims = parseClaims(accessToken);

        if (Objects.isNull(claims.get("auth"))) {
            throw new JwtAuthenticationProcessingException("권한 정보가 없는 토큰입니다.");
        }

        // Claim에서 권한 정보 가져오기
        Collection<? extends GrantedAuthority> authorities =
            Arrays.stream(claims.get("auth").toString().split(","))
                .map(SimpleGrantedAuthority::new)
                .toList();

        // UserDetails 객체를 만들어서 Authentication return
        UserDetails principal = new User(claims.getSubject(), "", authorities);
        return new UsernamePasswordAuthenticationToken(principal, "", authorities);
    }

    /**
     * Token 정보를 검증하는 메서드입니다.
     *
     * @param token Jwt 토큰
     * @return 토큰이 유효하다면 true, 유효하지 않다면 false
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT Token", e);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Token", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT claims string is empty.", e);
        }
        return false;
    }

    private Claims parseClaims(String accessToken) {
        try {
            return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(accessToken) // 토큰의 유효성 검사
                .getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }

}
