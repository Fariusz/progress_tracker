--liquibase formatted sql
--changeset rloth:1

CREATE TABLE ACTIVITY (
    id BIGINT AUTO_INCREMENT  PRIMARY KEY ,
    activity_name VARCHAR(400) NOT NULL ,
    created timestamp
);