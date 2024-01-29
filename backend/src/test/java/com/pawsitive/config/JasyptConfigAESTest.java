package com.pawsitive.config;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.jasypt.iv.RandomIvGenerator;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

/**
 * @author 이하늬
 * @since 1.0
 */
class JasyptConfigAESTest {
    static String key;

    @BeforeAll
    static void setUp() {
        key = "pawsitive2024";
    }

    @Test
    void stringEncryptor() {
        String mysqlUrl =
            "jdbc:mysql://i10c111.p.ssafy.io:3306/pawsitive_dev?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Seoul&zeroDateTimeBehavior=convertToNull&rewriteBatchedStatements=true";
        String mysqlUsername = "pawsitive";
        String mysqlPassword = "gkrkddPdl12~!";
        String redisHost = "3.36.63.3";
        String redisPort = "6379";
        String redisDatabase = "3";
        String redisPassword = "gkrkddPdl12!@";


        System.out.println("mysqlUrl: " + jasyptEncoding(mysqlUrl));
        System.out.println("mysqlUsername: " + jasyptEncoding(mysqlUsername));
        System.out.println("mysqlPassword: " + jasyptEncoding(mysqlPassword));
        System.out.println("redisHost: " + jasyptEncoding(redisHost));
        System.out.println("redisPassword: " + jasyptEncoding(redisPassword));
        System.out.println("redisPort: " + jasyptEncoding(redisPort));
        System.out.println("redisDatabase: " + jasyptEncoding(redisDatabase));
    }

    @Test
    void stringDecryptor() {
        String mysqlUrl =
            "/tEu/9hXQYL0bjgMDX7S4vQwt8GT9Vil65EDHw7rljbUHE2gCyzwUrhrOCAuDymxyuqVZAk95L6jUGl9/oakweKVaSIkJmQi0b5q0XwYvT39xnb21HkOBiU3Qgxn0LtIgK4j7ucWjfmRzwTyQWYTd/iAxhHheL9AcYd1/pCnYavHaigahfiRILuUUnzCfB64oL39iqV1m6ga6aQk4gFRfQENtju90ay9Z8juBxiMdYnNvSRYebOvTv2aqmR4vpPupQfBVozgUThVjGhjxw/0Z9piycYV78nO4coIh3VpEow=";
        String mysqlUsername = "jy6okPSnk28j95mN5u1Bn7ZvOQ0TLJMzr4U2JaYzmFMp4U6/Tqfu+qW/NDLeqVla";
        String mysqlPassword = "47WCyj7HpsGCcL2b7+a4YBkpzhzYoQrZrL8qOP1G8l1E8/7s3u84ZV6rXc2GsX/k";
        String redisHost = "ymvorPyKl01y4Kn/BzqXu9WRqZf3wxUPdyUA4swAkZSOiyfzcuaRDrorPGEmAjYQ";
        String redisPassword = "OjkC9tKG9jcaseZrkUUaJWpAJ6HPkUwQMOTzMNvVtZtzuRN+jmQdY26Zz2ROh4z0";


        System.out.println("mysqlUrl: " + jasyptDecoding(mysqlUrl));
        System.out.println("mysqlUsername: " + jasyptDecoding(mysqlUsername));
        System.out.println("mysqlPassword: " + jasyptDecoding(mysqlPassword));
        System.out.println("redisHost: " + jasyptDecoding(redisHost));
        System.out.println("redisPassword: " + jasyptDecoding(redisPassword));
    }

    public String jasyptEncoding(String value) {
        StandardPBEStringEncryptor pbeEnc = new StandardPBEStringEncryptor();
        pbeEnc.setAlgorithm("PBEWITHHMACSHA512ANDAES_256");
        pbeEnc.setPassword(key);
        pbeEnc.setIvGenerator(new RandomIvGenerator());
        return pbeEnc.encrypt(value);
    }

    public String jasyptDecoding(String value) {
        StandardPBEStringEncryptor pbeEnc = new StandardPBEStringEncryptor();
        pbeEnc.setAlgorithm("PBEWITHHMACSHA512ANDAES_256");
        pbeEnc.setPassword(key);
        pbeEnc.setIvGenerator(new RandomIvGenerator());
        return pbeEnc.decrypt(value);
    }
}