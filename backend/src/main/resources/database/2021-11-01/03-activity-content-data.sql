--liquibase formatted sql
--changeset rloth:3
insert into activity (id, activity_name, author_id ,created) values (1, 'Push ups', 1 ,'2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, author_id , created) values (2, 'Bench press', 2 ,'2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (3, 'Squad', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (4, 'Dead lift', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (5, 'Over head press', '2020-04-20T13:14:05.724885500');

--changeset rloth:4
insert into content (id, activity_id, content, created) values (1, 1,'15', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (6, 1,'17', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (7, 1,'23', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (2, 2, '80 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (8, 2, '85 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (9, 2, '90 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (3, 3, '100 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (10, 3, '105 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (11, 3, '110 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (12, 4, '90 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (13, 4, '95 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (14, 4, '100 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (5, 5, '60 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (15, 5, '62 kg', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (16, 5, '64 kg', '2020-04-20T13:14:05.724885500');
