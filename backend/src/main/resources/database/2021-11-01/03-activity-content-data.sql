--liquibase formatted sql
--changeset rloth:3
insert into activity (id, activity_name, created) values (1, 'activity1', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (2, 'activity2', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (3, 'activity3', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (4, 'activity4', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (5, 'activity5', '2020-04-20T13:14:05.724885500');

--changeset rloth:4
insert into content (id, activity_id, content, created) values (1, 1,'content1', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (2, 2, 'content2', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (3, 3, 'content3', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (4, 4, 'content4', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (5, 5, 'content5', '2020-04-20T13:14:05.724885500');
