DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
	`user_no`	INT	NOT NULL auto_increment primary key,
	`email`	VARCHAR(30)	NOT NULL,
	`name`	VARCHAR(10)	NOT NULL,
	`password`	VARCHAR(256)	NOT NULL,
	`address`	VARCHAR(100)	NOT NULL,
	`photo`	VARCHAR(300)	NULL
);

DROP TABLE IF EXISTS `dog`;

CREATE TABLE `dog` (
	`dog_no`	INT	NOT NULL auto_increment primary key,
	`user_no`	INT	NOT NULL,
	`name`	VARCHAR(10)	NOT NULL,
	`kind_cd`	VARCHAR(20)	NOT NULL,
	`created_at`	TIMESTAMP	NOT NULL,
	`is_naturalized`	tinyint(1)	NOT NULL,
	`color`	VARCHAR(10)	NOT NULL,
	`video`	VARCHAR(300)	NULL,
	`note`	VARCHAR(500)	NULL,
	`hit`	INT	NULL,
    `mbti`	VARCHAR(100)	NULL
);

DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
	`member_no`	INT	NOT NULL auto_increment primary key,
	`birth`	TIMESTAMP	NOT NULL,
	`gender`	CHAR(1)	NOT NULL,
	`type`	INT	NOT NULL,
	`stage`	INT	NOT NULL,
    `mbti`	VARCHAR(100)	NULL
);

DROP TABLE IF EXISTS `content`;

CREATE TABLE `content` (
	`content_no`	INT	NOT NULL auto_increment primary key,
	`content_category_no`	INT	NOT NULL,
	`title`	VARCHAR(100)	NOT NULL,
	`content`	VARCHAR(500)	NOT NULL,
	`photo`	VARCHAR(300)	NULL
);

DROP TABLE IF EXISTS `dog_content`;

CREATE TABLE `dog_content` (
	`dog_content_no`	INT	NOT NULL auto_increment primary key,
	`dog_no`	INT	NOT NULL,
	`content_no`	INT	NOT NULL
);

DROP TABLE IF EXISTS `content_category`;

CREATE TABLE `content_category` (
	`content_category_no`	INT	NOT NULL auto_increment primary key,
	`content_category_name`	VARCHAR(20)	NOT NULL
);

DROP TABLE IF EXISTS `question`;

CREATE TABLE `question` (
	`question_no`	INT	NOT NULL auto_increment primary key,
	`content`	VARCHAR(1)	NULL
);

DROP TABLE IF EXISTS `member_question`;

CREATE TABLE `member_question` (
	`member_question_no`	INT	NOT NULL auto_increment primary key,
	`member_no`	INT	NOT NULL,
	`question_no`	INT	NOT NULL,
	`created_at`	TIMESTAMP	NOT NULL,
	`answer`	VARCHAR(500)	NULL
);

DROP TABLE IF EXISTS `community_board`;

CREATE TABLE `community_board` (
	`community_board_no`	INT	NOT NULL auto_increment primary key,
	`member_no`	INT	NOT NULL,
	`title`	VARCHAR(100)	NOT NULL,
	`content`	VARCHAR(500)	NOT NULL,
	`photo`	VARCHAR(300)	NULL,
	`is_public`	TINYINT(1)	NULL,
	`latitude`	DECIMAL	NULL,
	`longitude`	DECIMAL	NULL,
	`created_at`	TIMESTAMP	NOT NULL,
	`hit`	INT	NULL,
	`content_category_no`	INT	NOT NULL
);

DROP TABLE IF EXISTS `community_comment`;

CREATE TABLE `community_comment` (
	`community_comment_no`	INT	NOT NULL auto_increment primary key,
	`member_no`	INT	NOT NULL,
	`content`	VARCHAR(500)	NOT NULL,
	`created_at`	TIMESTAMP	NOT NULL
);

DROP TABLE IF EXISTS `community`;

CREATE TABLE `community` (
	`community_no`	INT	NOT NULL auto_increment primary key,
	`community_board_no`	INT	NOT NULL,
	`community_comment_no`	INT	NOT NULL
);

DROP TABLE IF EXISTS `member_dog`;

CREATE TABLE `member_dog` (
	`member_dog_no`	INT	NOT NULL auto_increment primary key,
	`member_no`	INT	NOT NULL,
	`dog_no`	INT	NOT NULL,
	`type`	CHAR(1)	NOT NULL
);

DROP TABLE IF EXISTS `community_liked`;

CREATE TABLE `community_liked` (
	`community_liked_no`	INT	NOT NULL auto_increment primary key,
	`member_no`	INT	NOT NULL,
	`community_board_no`	INT	NOT NULL
);

DROP TABLE IF EXISTS `community_category`;

CREATE TABLE `community_category` (
	`community_category_no`	INT	NOT NULL auto_increment primary key,
	`community_category_name`	VARCHAR(20)	NOT NULL
);

DROP TABLE IF EXISTS `dog_image`;

CREATE TABLE `dog_image` (
	`dog_image_no`	INT	NOT NULL auto_increment primary key,
	`dog_no`	INT	NOT NULL,
	`url;`	VARCHAR(500)	NULL
);

ALTER TABLE `dog` ADD CONSTRAINT `FK_user_TO_dog_1` FOREIGN KEY (
	`user_no`
)
REFERENCES `user` (
	`user_no`
);

ALTER TABLE `member` ADD CONSTRAINT `FK_user_TO_member_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `user` (
	`user_no`
);

ALTER TABLE `content` ADD CONSTRAINT `FK_content_category_TO_content_1` FOREIGN KEY (
	`content_category_no`
)
REFERENCES `content_category` (
	`content_category_no`
);

ALTER TABLE `dog_content` ADD CONSTRAINT `FK_dog_TO_dog_content_1` FOREIGN KEY (
	`dog_no`
)
REFERENCES `dog` (
	`dog_no`
);

ALTER TABLE `dog_content` ADD CONSTRAINT `FK_content_TO_dog_content_1` FOREIGN KEY (
	`content_no`
)
REFERENCES `content` (
	`content_no`
);

ALTER TABLE `member_question` ADD CONSTRAINT `FK_member_TO_member_question_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `member_question` ADD CONSTRAINT `FK_question_TO_member_question_1` FOREIGN KEY (
	`question_no`
)
REFERENCES `question` (
	`question_no`
);

ALTER TABLE `community_board` ADD CONSTRAINT `FK_member_TO_community_board_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `community_board` ADD CONSTRAINT `FK_community_category_TO_community_board_1` FOREIGN KEY (
	`community_category_no`
)
REFERENCES `community_category` (
	`community_category_no`
);

ALTER TABLE `community_comment` ADD CONSTRAINT `FK_member_TO_community_comment_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `community` ADD CONSTRAINT `FK_community_comment_TO_community_1` FOREIGN KEY (
	`community_board_no`
)
REFERENCES `community_comment` (
	`community_comment_no`
);

ALTER TABLE `community` ADD CONSTRAINT `FK_community_board_TO_community_1` FOREIGN KEY (
	`community_comment_no`
)
REFERENCES `community_board` (
	`community_board_no`
);

ALTER TABLE `member_dog` ADD CONSTRAINT `FK_member_TO_member_dog_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `member_dog` ADD CONSTRAINT `FK_dog_TO_member_dog_1` FOREIGN KEY (
	`dog_no`
)
REFERENCES `dog` (
	`dog_no`
);

ALTER TABLE `community_liked` ADD CONSTRAINT `FK_member_TO_community_liked_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `community_liked` ADD CONSTRAINT `FK_community_board_TO_community_liked_1` FOREIGN KEY (
	`community_board_no`
)
REFERENCES `community_board` (
	`community_board_no`
);

ALTER TABLE `dog_image` ADD CONSTRAINT `FK_dog_TO_dog_image_1` FOREIGN KEY (
	`dog_no`
)
REFERENCES `dog` (
	`dog_no`
);