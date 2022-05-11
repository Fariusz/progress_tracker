--liquibase formatted sql
--changeset rloth:1

CREATE TABLE activities_list
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    list_name     VARCHAR(400) NOT NULL,
    is_training   BOOLEAN NOT NULL,
    author_id     BIGINT,
    created       timestamp
);

CREATE TABLE activity
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    list_id       BIGINT        NOT NULL,
    activity_name VARCHAR(400) NOT NULL,
    author_id     BIGINT,
    created       timestamp
);

ALTER TABLE activity
    ADD CONSTRAINT activity_list_id
        FOREIGN KEY (list_id) REFERENCES activities_list (id);