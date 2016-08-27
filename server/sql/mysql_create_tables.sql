CREATE TABLE ps_event_exercise (
  id int NOT NULL AUTO_INCREMENT,
  event_id int NOT NULL,
  exercise_id int NOT NULL,
  exercise_load int NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO ps_event_exercise (event_id, exercise_id, exercise_load) VALUES
(1, 2, 60),
(1, 3, 30),
(2, 2, 20),
(2, 3, 10),
(3, 2, 10),
(3, 3, 10);
CREATE TABLE ps_event (
  id int NOT NULL AUTO_INCREMENT,
  event_type_id int NOT NULL,
  user_id int NOT NULL,
  event_date varchar(250) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO ps_event (event_type_id, user_id, event_date) VALUES
(1, 1, '2016-08-24'), -- default goal
(2, 1, '2016-08-22'), -- default planned
(3, 1, '2016-08-21'); -- done
CREATE TABLE ps_exercise (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(250) NOT NULL,
  metric_id int NOT NULL,
  suggested_load int NOT NULL,
  is_exercise int NOT NULL DEFAULT '0',
  PRIMARY KEY(id)
);

INSERT INTO ps_exercise (name, metric_id, suggested_load, is_exercise) VALUES
('Warm up', 2, 2, 1),
('Squats', 3, 20, 1),
('Push ups', 3, 10, 1),
('Walking lunges', 3, 20, 1),
('Dumbell rows', 3, 10, 1),
('Plank', 1, 15, 1),
('Jumping jacks', 3, 30, 1),
('Rest', 2, 1, 1),
('Stretch', 2, 3, 1),
('Time running', 2, 30, 1),
('Distance running', 4, 2, 1),
('Default set', 3, 1, 0),
('Running set', 3, 1, 0);
CREATE TABLE ps_user (
  id int NOT NULL AUTO INCREMENT,
  first_name varchar(250) NOT NULL,
  last_name varchar(250),
  email varchar(250),
  passwd varchar(250),
  PRIMARY KEY(id)
);

INSERT INTO ps_user (first_name, last_name, email) VALUES
('Vinicius', 'Dias', 'v.fernandesdias@gmail.com');

CREATE TABLE ps_event_type (
  id int NOT NULL,
  name varchar(250) NOT NULL
);

INSERT INTO ps_event_type (id, name) VALUES
(1, 'Goal'),
(2, 'Planned'),
(3, 'Done');

ALTER TABLE ps_event_type
  ADD PRIMARY KEY (id);
CREATE TABLE ps_exercise_group (
  group_id int NOT NULL,
  exercise_id int NOT NULL,
  parent_exercise_id int NOT NULL,
  order_in_group int DEFAULT NULL
);

INSERT INTO ps_exercise_group (group_id, exercise_id, parent_exercise_id, order_in_group) VALUES
(1, 1, 12, 1),
(1, 2, 12, 2),
(1, 3, 12, 3),
(1, 4, 12, 4),
(1, 5, 12, 5),
(1, 6, 12, 6),
(1, 7, 12, 7),
(1, 8, 12, 8),
(1, 9, 12, 9),
(2, 11, 13, 1),
(2, 10, 13, 2);
CREATE TABLE ps_metric (
  id int NOT NULL,
  name varchar(250) NOT NULL,
  unit varchar(250) NOT NULL,
  metric_type_id int NOT NULL
);

INSERT INTO ps_metric (id, name, unit, metric_type_id) VALUES
(1, 'seconds', 's', 1),
(2, 'minutes', 'min', 1),
(3, 'units', '', 2),
(4, 'kilometers', 'km', 3);

ALTER TABLE ps_metric
  ADD PRIMARY KEY (id);
CREATE TABLE ps_metric_type (
  id int NOT NULL,
  name varchar(250) NOT NULL
);

INSERT INTO ps_metric_type (id, name) VALUES
(1, 'time'),
(2, 'set'),
(3, 'distance');

ALTER TABLE ps_metric_type
  ADD PRIMARY KEY (id);
