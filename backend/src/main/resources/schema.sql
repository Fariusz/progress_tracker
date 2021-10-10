CREATE TABLE USER (
    id BIGINT AUTO_INCREMENT PRIMARY KEY ,
    login VARCHAR(30) ,
    password VARCHAR(30) ,
    created timestamp
);

CREATE TABLE ACTIVITY (
    id BIGINT AUTO_INCREMENT  PRIMARY KEY ,
    user_id BIGINT NOT NULL ,
    activityName VARCHAR(400) NOT NULL ,
    created timestamp
);

CREATE TABLE CONTENT(
    id BIGINT AUTO_INCREMENT PRIMARY KEY ,
    activity_id BIGINT NOT NULL ,
    content VARCHAR(2000) NULL ,
    created timestamp
);

ALTER TABLE ACTIVITY
    ADD CONSTRAINT activity_user_id
    FOREIGN KEY (user_id) REFERENCES USER(id);

ALTER TABLE CONTENT
    ADD CONSTRAINT content_activity_id
    FOREIGN KEY (activity_id) REFERENCES ACTIVITY(id);