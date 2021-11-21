--liquibase formatted sql
--changeset rloth:3
insert into activity (id, activity_name, created) values (100, 'activity', '2021-04-20T00:00');
insert into activity (id, activity_name, created) values (101, 'activity1', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (102, 'activity2', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (103, 'activity3', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (104, 'activity4', '2020-04-20T13:14:05.724885500');
insert into activity (id, activity_name, created) values (105, 'activity5', '2020-04-20T13:14:05.724885500');

--changeset rloth:4
insert into content (id, activity_id, content, created) values (100, 100,'content0', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (101, 101,'content1', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (102, 102, 'content2', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (103, 103, 'content3', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (104, 104, 'content4', '2020-04-20T13:14:05.724885500');
insert into content (id, activity_id, content, created) values (105, 105, 'content5', '2020-04-20T13:14:05.724885500');
