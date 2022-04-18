--liquibase formatted sql
--changeset rloth:3

insert into activities_list (id, list_name, is_training, author_id, created)
values (1, 'Trening siłowy A', true, 1 ,'2020-01-01T08:00:00');
insert into activities_list (id, list_name, is_training, author_id, created)
values (2, 'Trening siłowy B', true, 1 ,'2020-01-01T08:00:00');

insert into activities_list (id, list_name, is_training, author_id, created)
values (3, 'Pomiary ciała', false, 1 ,'2020-01-01T08:00:00');

insert into activity (id, list_id, activity_name, author_id, created)
values (1, 1, 'Przysiad klasyczny ze sztangą trzymaną z tyłu - 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (2, 1, 'Ściąganie drążka wyciągu górnego szerokim chwytem - 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (3, 1, 'Wyciskanie hantli na ławce skośnej dodatniej - 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (4, 1, 'Wyciskanie żołnierskie - 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (5, 1, 'Zginanie przedramion ze sztangą łamaną stojąc - 3 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (6, 1, 'Spięcia mięśni brzucha przy użyciu linki wyciągu górnego – 3 serie', 1, '2020-01-01T08:00:00');


insert into activity (id, list_id, activity_name, author_id, created)
values (7, 2, 'Martwy ciąg na "prostych" nogach - 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (8, 2, 'Podciąganie na drążku nachwytem – 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (9, 2, 'Wyciskanie sztangi na ławce poziomej - 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (10, 2, 'Wyciskanie hantli siedząc na ławce - 4 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (11, 2, 'Pompki na poręczach (z dodatkowym obciążeniem) - 3 serie', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (12, 2, 'Wznosy zgiętych nóg w zwisie na drążku - 3 serie', 1, '2020-01-01T08:00:00');

insert into activity (id, list_id, activity_name, author_id, created)
values (13, 3, 'Obwód talii', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (14, 3, 'Obwód pasa', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id, activity_name, author_id, created)
values (15, 3, 'Obwód uda', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (16, 3, 'Obwód łydki', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (17, 3, 'Obwód ramienia', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (18, 3, 'Obwód klatki piersiowej', 1, '2020-01-01T08:00:00');
insert into activity (id, list_id , activity_name, author_id, created)
values (19, 3, 'Waga', 1, '2020-01-01T08:00:00');


--changeset rloth:4
insert into content (id, activity_id, content, repetitions, created)
values (1, 1, '50','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (2, 1, '55','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (3, 1, '60','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (4, 2, '15','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (5, 2, '20','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (6, 2, '25','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (7, 3, '10','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (8, 3, '15','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (9, 3, '20','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (10, 4, '20','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (11, 4, '25','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (12, 4, '30','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (13, 5, '5','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (14, 5, '10','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (15, 5, '15','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (16, 6, '5','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (17, 6, '10','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (18, 6, '15','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (19, 7, '50','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (20, 7, '55','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (21, 7, '60','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (22, 8, '15','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (23, 8, '20','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (24, 8, '25','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (25, 9, '10','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (26, 9, '15','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (27, 9, '20','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (28, 10, '20','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (29, 10, '25','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (30, 10, '30','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (31, 11, '5','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (32, 11, '10','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (33, 11, '15','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, repetitions, created)
values (34, 12, '5','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (35, 12, '10','10', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, repetitions, created)
values (36, 12, '15','10', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, created)
values (37, 13, '90', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (38, 13, '89', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (39, 13, '87', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, created)
values (40, 14, '100', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (41, 14, '99', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (42, 14, '98', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, created)
values (43, 15, '67', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (44, 15, '66', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (45, 15, '65', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, created)
values (46, 16, '43', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (47, 16, '44', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (48, 16, '45', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, created)
values (49, 17, '37', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (50, 17, '38', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (51, 17, '39', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, created)
values (52, 18, '100', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (53, 18, '101', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (54, 18, '102', '2020-01-01T08:00:00');

insert into content (id, activity_id, content, created)
values (55, 19, '100', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (56, 19, '97', '2020-01-01T08:00:00');
insert into content (id, activity_id, content, created)
values (57, 19, '95', '2020-01-01T08:00:00');


