--liquibase formatted sql
--changeset rloth:1

insert into activity(id,  activity_name, created)
values (1, 'Podciąganie','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (1,1,'7 razy','2021-01-01T00:01:00.0');

insert into activity(id,  activity_name, created)
values (0, 'OHP','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (0,1,'16 razy','2021-01-01T00:01:00.0');

insert into activity(id,  activity_name, created)
values (2, 'Przysiad','2021-01-01T00:01:00.0');
insert into activity(id,  activity_name, created)
values (3, 'Wyciskanie','2021-01-01T00:01:00.0');
insert into activity(id,  activity_name, created)
values (4, 'Martwy ciąg','2021-01-01T00:01:00.0');
insert into activity(id,  activity_name, created)
values (5, 'Dipy','2021-01-01T00:01:00.0');

insert into content(id, activity_id, content, created)
values (2, 1, '15 powtórzeń','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (3, 1, '6 powtórzeń','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (4, 2, '65 kg','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (5, 2, '115 kg','2021-01-01T00:01:00.0');
