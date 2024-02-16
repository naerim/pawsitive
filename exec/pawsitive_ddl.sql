-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: i10c111.p.ssafy.io    Database: pawsitive_dev
-- ------------------------------------------------------
-- Server version	8.0.34


--
-- Table structure for table `adopt_dog`
--

DROP TABLE IF EXISTS `adopt_dog`;
CREATE TABLE `adopt_dog` (
  `adopt_dog_no` int NOT NULL AUTO_INCREMENT,
  `user_no` int NOT NULL,
  `dog_no` int NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `weight` decimal(5,2) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `image` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`adopt_dog_no`),
  KEY `FK_dog_TO_adopt_dog_1` (`dog_no`),
  KEY `FK_member_TO_adopt_dog_1` (`user_no`),
  CONSTRAINT `FK_dog_TO_adopt_dog_1` FOREIGN KEY (`dog_no`) REFERENCES `dog` (`dog_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_member_TO_adopt_dog_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `adoption_survey`
--

DROP TABLE IF EXISTS `adoption_survey`;
CREATE TABLE `adoption_survey` (
  `user_no` int NOT NULL,
  `accommodation_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `carer` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `reason` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `family_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `family_introduce` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `family_add` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `family_agree` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `alone_time` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `temporary_residence` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `raise_history` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `raise_term` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pet_route` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pet_sociability` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `raise_no_reason` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `personality` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `training` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `hospital` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `expenditure` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `forever_responsibility` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`user_no`),
  CONSTRAINT `FK_member_TO_adoption_survey_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer` (
  `answer_no` int NOT NULL AUTO_INCREMENT,
  `user_no` int NOT NULL,
  `question_no` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`answer_no`),
  KEY `FK_question_TO_member_question_1` (`question_no`),
  KEY `FK_member_TO_member_question_1` (`user_no`),
  CONSTRAINT `FK_member_TO_member_question_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON UPDATE CASCADE,
  CONSTRAINT `FK_question_TO_member_question_1` FOREIGN KEY (`question_no`) REFERENCES `question` (`question_no`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat` (
  `chat_no` int NOT NULL AUTO_INCREMENT,
  `chat_room_no` int NOT NULL,
  `user_no` int NOT NULL,
  `message` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_read` tinyint(1) NOT NULL DEFAULT '0',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`chat_no`),
  KEY `FK_chat_room_TO_chat_1` (`chat_room_no`),
  KEY `FK_users_TO_chat_1` (`user_no`),
  CONSTRAINT `FK_chat_room_TO_chat_1` FOREIGN KEY (`chat_room_no`) REFERENCES `chat_room` (`chat_room_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_users_TO_chat_1` FOREIGN KEY (`user_no`) REFERENCES `users` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `chat_room`
--

DROP TABLE IF EXISTS `chat_room`;
CREATE TABLE `chat_room` (
  `chat_room_no` int NOT NULL AUTO_INCREMENT,
  `id` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dog_no` int NOT NULL,
  `user_no` int NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `promise_created_at` datetime DEFAULT NULL,
  `is_promise_accepted` tinyint(1) DEFAULT NULL,
  `session_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`chat_room_no`),
  UNIQUE KEY `unique_dog_no_and_user_no` (`dog_no`,`user_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `community_board`
--

DROP TABLE IF EXISTS `community_board`;
CREATE TABLE `community_board` (
  `community_board_no` int NOT NULL AUTO_INCREMENT,
  `user_no` int NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT '1',
  `latitude` decimal(18,14) DEFAULT NULL,
  `longitude` decimal(18,14) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hit` int DEFAULT '0',
  `community_category_no` int NOT NULL,
  PRIMARY KEY (`community_board_no`),
  KEY `FK_community_category_TO_community_board_1` (`community_category_no`),
  KEY `FK_member_TO_community_board_1` (`user_no`),
  CONSTRAINT `FK_community_category_TO_community_board_1` FOREIGN KEY (`community_category_no`) REFERENCES `community_category` (`community_category_no`) ON UPDATE CASCADE,
  CONSTRAINT `FK_member_TO_community_board_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `community_category`
--

DROP TABLE IF EXISTS `community_category`;
CREATE TABLE `community_category` (
  `community_category_no` int NOT NULL AUTO_INCREMENT,
  `community_category_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`community_category_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `community_image`
--

DROP TABLE IF EXISTS `community_image`;
CREATE TABLE `community_image` (
  `community_image_no` int NOT NULL AUTO_INCREMENT,
  `community_board_no` int NOT NULL,
  `image` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`community_image_no`),
  KEY `FK_community_board_TO_community_image_1` (`community_board_no`),
  CONSTRAINT `FK_community_board_TO_community_image_1` FOREIGN KEY (`community_board_no`) REFERENCES `community_board` (`community_board_no`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `community_liked`
--

DROP TABLE IF EXISTS `community_liked`;
CREATE TABLE `community_liked` (
  `community_liked_no` int NOT NULL AUTO_INCREMENT,
  `user_no` int NOT NULL,
  `community_board_no` int NOT NULL,
  PRIMARY KEY (`community_liked_no`),
  KEY `FK_community_board_TO_community_liked_1` (`community_board_no`),
  KEY `FK_member_TO_community_liked_1` (`user_no`),
  CONSTRAINT `FK_community_board_TO_community_liked_1` FOREIGN KEY (`community_board_no`) REFERENCES `community_board` (`community_board_no`) ON UPDATE CASCADE,
  CONSTRAINT `FK_member_TO_community_liked_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `content_no` int NOT NULL AUTO_INCREMENT,
  `content_category_no` int NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`content_no`),
  KEY `FK_content_category_TO_content_1` (`content_category_no`),
  CONSTRAINT `FK_content_category_TO_content_1` FOREIGN KEY (`content_category_no`) REFERENCES `content_category` (`content_category_no`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `content_category`
--

DROP TABLE IF EXISTS `content_category`;
CREATE TABLE `content_category` (
  `content_category_no` int NOT NULL AUTO_INCREMENT,
  `content_category_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`content_category_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `dog`
--

DROP TABLE IF EXISTS `dog`;
CREATE TABLE `dog` (
  `dog_no` int NOT NULL AUTO_INCREMENT,
  `user_no` int NOT NULL,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `kind` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_neutralized` tinyint(1) NOT NULL,
  `note` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `hit` int NOT NULL DEFAULT '0',
  `mbti` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `age` int NOT NULL DEFAULT '1',
  `status` int NOT NULL DEFAULT '0',
  `sex` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`dog_no`),
  KEY `FK_user_TO_dog_1` (`user_no`),
  CONSTRAINT `FK_user_TO_dog_1` FOREIGN KEY (`user_no`) REFERENCES `users` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `dog_content`
--

DROP TABLE IF EXISTS `dog_content`;
CREATE TABLE `dog_content` (
  `dog_content_no` int NOT NULL AUTO_INCREMENT,
  `dog_no` int NOT NULL,
  `content_no` int NOT NULL,
  PRIMARY KEY (`dog_content_no`),
  KEY `FK_dog_TO_dog_content_1` (`dog_no`),
  KEY `FK_content_TO_dog_content_1` (`content_no`),
  CONSTRAINT `FK_content_TO_dog_content_1` FOREIGN KEY (`content_no`) REFERENCES `content` (`content_no`) ON UPDATE CASCADE,
  CONSTRAINT `FK_dog_TO_dog_content_1` FOREIGN KEY (`dog_no`) REFERENCES `dog` (`dog_no`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `dog_file`
--

DROP TABLE IF EXISTS `dog_file`;
CREATE TABLE `dog_file` (
  `dog_file_no` int NOT NULL AUTO_INCREMENT,
  `dog_no` int NOT NULL,
  `file` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`dog_file_no`),
  KEY `FK_dog_TO_dog_image_1` (`dog_no`),
  CONSTRAINT `FK_dog_TO_dog_image_1` FOREIGN KEY (`dog_no`) REFERENCES `dog` (`dog_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `user_no` int NOT NULL AUTO_INCREMENT,
  `birth` datetime NOT NULL,
  `gender` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` int NOT NULL,
  `stage` int NOT NULL,
  `mbti` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`user_no`),
  CONSTRAINT `FK_user_TO_member_1` FOREIGN KEY (`user_no`) REFERENCES `users` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `member_dog_like`
--

DROP TABLE IF EXISTS `member_dog_like`;
CREATE TABLE `member_dog_like` (
  `member_dog_like_no` int NOT NULL AUTO_INCREMENT,
  `user_no` int NOT NULL,
  `dog_no` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`member_dog_like_no`),
  KEY `FK_member_TO_member_dog_1` (`user_no`),
  KEY `FK_dog_TO_member_dog_1` (`dog_no`),
  CONSTRAINT `FK_dog_TO_member_dog_1` FOREIGN KEY (`dog_no`) REFERENCES `dog` (`dog_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_member_TO_member_dog_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `member_dog_matrix`
--

DROP TABLE IF EXISTS `member_dog_matrix`;
CREATE TABLE `member_dog_matrix` (
  `user_no` int NOT NULL,
  `member_dog_count` int NOT NULL DEFAULT '0',
  `kind` double NOT NULL DEFAULT '0',
  `neutralized` double NOT NULL DEFAULT '0',
  `age` double NOT NULL DEFAULT '0',
  `sex` double NOT NULL DEFAULT '0',
  `eq` double NOT NULL DEFAULT '0',
  `si` double NOT NULL DEFAULT '0',
  `aw` double NOT NULL DEFAULT '0',
  `fc` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_no`),
  CONSTRAINT `FK_member_TO_member_dog_matrix_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `member_dog_visit`
--

DROP TABLE IF EXISTS `member_dog_visit`;
CREATE TABLE `member_dog_visit` (
  `member_dog_visit_no` int NOT NULL AUTO_INCREMENT,
  `user_no` int NOT NULL,
  `dog_no` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`member_dog_visit_no`),
  KEY `FK_member_to_member_dog_visit_1_idx` (`user_no`),
  KEY `FK_dog_to_member_dog_visit_1_idx` (`dog_no`),
  CONSTRAINT `FK_dog_to_member_dog_visit_1` FOREIGN KEY (`dog_no`) REFERENCES `dog` (`dog_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_member_to_member_dog_visit_1` FOREIGN KEY (`user_no`) REFERENCES `member` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `question_no` int NOT NULL AUTO_INCREMENT,
  `content` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`question_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `surveys`
--

DROP TABLE IF EXISTS `surveys`;
CREATE TABLE `surveys` (
  `survey_no` int NOT NULL AUTO_INCREMENT,
  `q1_answer` int NOT NULL,
  `q2_answer` int NOT NULL,
  `q3_answer` int NOT NULL,
  `q4_answer` int NOT NULL,
  `q5_answer` int NOT NULL,
  `participant` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`survey_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_no` int NOT NULL AUTO_INCREMENT,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pw` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`user_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;