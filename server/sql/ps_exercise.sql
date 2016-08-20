CREATE TABLE ps_exercise (
  id int NOT NULL,
  name varchar(250) NOT NULL,
  metric_id int NOT NULL,
  suggested_load int NOT NULL,
  is_exercise int NOT NULL DEFAULT '0'
);

INSERT INTO ps_exercise (id, name, metric_id, suggested_load, is_exercise) VALUES
(1, 'Warm up', 2, 2, 1),
(2, 'Squats', 3, 20, 1),
(3, 'Push ups', 3, 10, 1),
(4, 'Walking lunges', 3, 20, 1),
(5, 'Dumbell rows', 3, 10, 1),
(6, 'Plank', 1, 15, 1),
(7, 'Jumping jacks', 3, 30, 1),
(8, 'Rest', 2, 1, 1),
(9, 'Stretch', 2, 3, 1),
(10, 'Time running', 2, 30, 1),
(11, 'Distance running', 4, 2, 1),
(12, 'Default set', 3, 1, 0),
(13, 'Running set', 3, 1, 0);

ALTER TABLE ps_exercise
  ADD PRIMARY KEY (id);
