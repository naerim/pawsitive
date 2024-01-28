package com.pawsitive.config;

import com.pawsitive.auth.HttpCookieOAuth2AuthorizationRequestRepository;
import com.pawsitive.auth.filter.JwtAuthenticationFilter;
import com.pawsitive.auth.handler.OAuth2AuthenticationFailureHandler;
import com.pawsitive.auth.handler.OAuth2AuthenticationSuccessHandler;
import com.pawsitive.auth.jwt.JwtTokenProvider;
import com.pawsitive.auth.service.CustomOAuth2UserService;
import com.pawsitive.auth.service.CustomUserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

/**
 * 인증(authentication) 와 인가(authorization) 처리를 위한 스프링 시큐리티 설정 정의.
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailService customUserDetailService;
    private final CustomOAuth2UserService customOAuth2UserService;
    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;
    private final HttpCookieOAuth2AuthorizationRequestRepository
        httpCookieOAuth2AuthorizationRequestRepository;
    private final CorsConfigurationSource corsConfigurationSource;

    // Password 인코딩 방식에 BCrypt 암호화 방식 사용
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationProvider authenticationProvider() {
        // DAO 기반으로 Authentication Provider를 생성
        // BCrypt Password Encoder와 UserDetailService 구현체를 설정
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        daoAuthenticationProvider.setUserDetailsService(this.customUserDetailService);
        return daoAuthenticationProvider;
    }

    @Bean
    AuthenticationManager authenticationManager() throws Exception {
        // DAO 기반의 Authentication Provider가 적용되도록 설정
        return new ProviderManager(authenticationProvider());
    }

    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .httpBasic(HttpBasicConfigurer::disable)
            .csrf(CsrfConfigurer::disable) // csrf 설정 disable
            .cors(corsConfigurer -> corsConfigurer.configurationSource(corsConfigurationSource))
            .sessionManagement(
                configurer -> configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/v3/**", "/swagger-ui/**", "/swagger-resources/**").permitAll()
                .requestMatchers("/api/v1/users/me").authenticated()
                .anyRequest().permitAll()
            )
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
                UsernamePasswordAuthenticationFilter.class);

        http
            .oauth2Login(configurer ->
                configurer.authorizationEndpoint(config -> config.authorizationRequestRepository(
                        httpCookieOAuth2AuthorizationRequestRepository))
                    .userInfoEndpoint(userInfo -> userInfo.userService(customOAuth2UserService))
                    .successHandler(oAuth2AuthenticationSuccessHandler)
                    .failureHandler(oAuth2AuthenticationFailureHandler));

        return http.build();
    }
}