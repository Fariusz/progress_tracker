--liquibase formatted sql
--changeset rloth:8

CREATE TABLE image
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(45) NOT NULL,
    author_id     BIGINT,
    created       timestamp,
    picture       LONGBLOB NOT NULL
);