--liquibase formatted sql
--changeset rloth:1

CREATE TABLE activity
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    activity_name VARCHAR(400) NOT NULL,
    author_id     BIGINT,
    created       timestamp
);