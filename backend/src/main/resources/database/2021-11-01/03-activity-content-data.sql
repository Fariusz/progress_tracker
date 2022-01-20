--liquibase formatted sql
--changeset rloth:3
insert into activity (id, activity_name, author_id, created) values (1, 'Push ups', 1, '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, author_id, created) values (2, 'Bench press', 1, '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, author_id, created) values (3, 'Squad', 1, '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, author_id, created) values (4, 'Dead lift', 1, '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, author_id, created) values (5, 'Over head press', 1, '2020-04-20T13:14:05.724885500');

insert into activity (id, activity_name, author_id, created) values (6, 'Books', 2, '2021-06-20T22:54:05.724885500');
insert into activity (id, activity_name, author_id, created) values (7, 'Water', 2, '2021-08-20T07:13:05.724885500');
insert into activity (id, activity_name, author_id, created) values (8, 'Tidy room', 2, '2021-02-20T09:14:05.724885500');
insert into activity (id, activity_name, author_id, created) values (9, 'Cigarettes', 2, '2021-09-20T16:20:05.724885500');
insert into activity (id, activity_name, author_id, created) values (10, 'Coffees', 2, '2021-01-20T15:10:05.724885500');
--changeset rloth:4
insert into content (id, activity_id, content, created) values (1, 1,'15', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (6, 1,'17', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (7, 1,'23', '2021-06-20T08:00:00.0');
insert into content (id, activity_id, content, created) values (2, 2, '80', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (8, 2, '85', '2021-06-20T08:00:00.0');
insert into content (id, activity_id, content, created) values (9, 2, '90', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (3, 3, '100', '2021-06-20T08:00:00.0');
insert into content (id, activity_id, content, created) values (10, 3, '105', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (11, 3, '110', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (12, 4, '90', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (13, 4, '95', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (14, 4, '100', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (5, 5, '60', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (15, 5, '62', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (16, 5, '64', '2020-04-20T13:14:05.724885500');

insert into content (id, activity_id, content, created) values (17, 6,'15', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (18, 6,'17', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (19, 6,'23', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (20, 7, '2 l', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (21, 7, '2 l', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (22, 7, '1 l', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (23, 8, '1', '2022-01-01T08:00:0');
insert into content (id, activity_id, content, created) values (24, 8, '1', '2022-01-04T08:00:0');
insert into content (id, activity_id, content, created) values (25, 8, '1', '2022-01-08T08:00:0');
insert into content (id, activity_id, content, created) values (26, 9, '10', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (27, 9, '12', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (28, 9, '17', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (29, 10, '2', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (30, 10, '3', '2020-05-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (31, 10, '2', '2020-06-20T13:14:05.724885500');