--liquibase formatted sql
--changeset rloth:5

create table users
(
    id         BIGINT AUTO_INCREMENT PRIMARY KEY,
    email      varchar(45)  not null,
    first_name varchar(20),
    last_name  varchar(20),
    username   varchar(50)  not null UNIQUE,
    password   varchar(100) not null,
    enabled    boolean      not null
);
--changeset rloth:6
create table authorities
(
    id        BIGINT AUTO_INCREMENT PRIMARY KEY,
    username  varchar(50) not null,
    authority varchar(50) not null,
    constraint fk_authorities_users foreign key (username) references
        users (username),
    UNIQUE KEY username_authority (username, authority)
);
--changeset rloth:7
insert into users (id, email, first_name, last_name, username, password, enabled)
values (1, 'test@test.com', 'Name', 'Lastname', 'test',
        '{bcrypt}$2a$10$upzXFsFUOClFRR69OMKF8eajGMRs0vhcSHqvNDKy9yfW45w7o9z6O', true);
insert into authorities (username, authority)
values ('test', 'USER');