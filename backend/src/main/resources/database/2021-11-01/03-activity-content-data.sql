--liquibase formatted sql
--changeset rloth:3

insert into activities_list (id, list_name, is_training, author_id, created)
values (1, 'Trening siłowy A', true, 1 ,'2022-01-01T08:00:00');
insert into activities_list (id, list_name, is_training, author_id, created)
values (2, 'Trening siłowy B', true, 1 ,'2022-01-01T08:00:00');

insert into activities_list (id, list_name, is_training, author_id, created)
values (3, 'Pomiary ciała', false, 1 ,'2022-01-01T08:00:00');

insert into activity (id, list_id, activity_name, author_id, created)
values (1, 1, 'Przysiad klasyczny ze sztangą trzymaną z tyłu - 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (2, 1, 'Ściąganie drążka wyciągu górnego szerokim chwytem - 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (3, 1, 'Wyciskanie hantli na ławce skośnej dodatniej - 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (4, 1, 'Wyciskanie żołnierskie - 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (5, 1, 'Zginanie przedramion ze sztangą łamaną stojąc - 3 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (6, 1, 'Spięcia mięśni brzucha przy użyciu linki wyciągu górnego – 3 serie', 1, '2022-01-01T08:00:00');


insert into activity (id, list_id, activity_name, author_id, created)
values (7, 2, 'Martwy ciąg na "prostych" nogach - 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (8, 2, 'Podciąganie na drążku nachwytem – 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (9, 2, 'Wyciskanie sztangi na ławce poziomej - 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (10, 2, 'Wyciskanie hantli siedząc na ławce - 4 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (11, 2, 'Pompki na poręczach (z dodatkowym obciążeniem) - 3 serie', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (12, 2, 'Wznosy zgiętych nóg w zwisie na drążku - 3 serie', 1, '2022-01-01T08:00:00');

insert into activity (id, list_id, activity_name, author_id, created)
values (13, 3, 'Obwód talii', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (14, 3, 'Obwód pasa', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (15, 3, 'Obwód uda', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (16, 3, 'Obwód łydki', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (17, 3, 'Obwód ramienia', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (18, 3, 'Obwód klatki piersiowej', 1, '2022-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (19, 3, 'Waga', 1, '2022-01-01T08:00:00');


