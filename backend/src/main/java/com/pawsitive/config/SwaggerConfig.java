package com.pawsitive.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * API 문서 관련 springdoc 설정 정의.
 */
@OpenAPIDefinition(
    servers = {
        @Server(url = "https://i10c111.p.ssafy.io", description = "배포 서버 API"),
        @Server(url = "http://localhost:8080", description = "Localhost API"),
    },
    info = @Info(
        title = "Pawsitive API Document",
        description = "SSAFY 10th C111",
        version = "v1.4",
        contact = @Contact(name = "yihoney", email = "109622@naver.com")),
    tags = {
        @Tag(name = "01.User", description = "유저 기능"),
        @Tag(name = "02.Auth", description = "인증 기능"),
        @Tag(name = "03.Dog", description = "유기견 기능"),
        @Tag(name = "04.Content", description = "펫과사전 기능"),
        @Tag(name = "05.ChatRoom", description = "채팅방 기능"),
        @Tag(name = "06.Community", description = "커뮤니티 기능"),
        @Tag(name = "07.Question", description = "오늘의 질문 기능"),
        @Tag(name = "08.Surveys", description = "설문 기능"),
        @Tag(name = "09.Member-Adoption", description = "회원 입양 기능"),
        @Tag(name = "10.Shelter-Adoption", description = "보호소 입양 기능"),
    }
)
@SecurityRequirement(name = "JWT")
@SecurityScheme(
    name = "JWT",
    type = SecuritySchemeType.HTTP,
    bearerFormat = "JWT",
    scheme = "Bearer"
)
@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
            .group("controller")
            .pathsToMatch("/api/**")
            .build();
    }

    public static final String SECURITY_SCHEMA_NAME = "JWT";
    public static final String AUTHORIZATION_SCOPE_GLOBAL = "global";
    public static final String AUTHORIZATION_SCOPE_GLOBAL_DESC = "accessEverything";

}
