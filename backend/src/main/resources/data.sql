insert into user(id, login, password, created)
    values (1, 'user', 'user', '2021-01-01T00:01:00.0');
insert into activity(id, user_id, activity_name, created)
    values (1, 1, 'Podciąganie','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
    values (1,1,'7 razy','2021-01-01T00:01:00.0');


insert into user(id, login, password, created)
values (0, 'user', 'user', '2021-01-01T00:01:00.0');
insert into activity(id, user_id, activity_name, created)
values (0, 1, 'OHP','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (0,1,'16 razy','2021-01-01T00:01:00.0');

insert into activity(id, user_id, activity_name, created)
values (2, 1, 'Przysiad','2021-01-01T00:01:00.0');
insert into activity(id, user_id, activity_name, created)
values (3, 1, 'Wyciskanie','2021-01-01T00:01:00.0');
insert into activity(id, user_id, activity_name, created)
values (4, 1, 'Martwy ciąg','2021-01-01T00:01:00.0');
insert into activity(id, user_id, activity_name, created)
values (5, 1, 'Dipy','2021-01-01T00:01:00.0');



insert into content(id, activity_id, content, created)
values (2, 1, '15 powtórzeń','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (3, 1, '6 powtórzeń','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (4, 2, '65 kg','2021-01-01T00:01:00.0');
insert into content(id, activity_id, content, created)
values (5, 2, '115 kg','2021-01-01T00:01:00.0');
