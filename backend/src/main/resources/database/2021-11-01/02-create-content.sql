--liquibase formatted sql
--changeset rloth:2

CREATE TABLE CONTENT
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    activity_id BIGINT        NOT NULL,
    content     VARCHAR(2000) NULL,
    created     timestamp
);

ALTER TABLE CONTENT
    ADD CONSTRAINT content_activity_id
        FOREIGN KEY (activity_id) REFERENCES activity (id);