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
('Starter set', 3, 1, 0),
('Default set', 3, 1, 0),
('Running set', 3, 1, 0),
('Half Squats', 3, 10, 1),
('Half Walking lunges', 3, 10, 1);

INSERT INTO ps_user (first_name, last_name, email) VALUES
('Vinicius', 'Dias', 'v.fernandesdias@gmail.com');

INSERT INTO ps_event_type (id, name) VALUES
(1, 'Goal'),
(2, 'Planned'),
(3, 'Done');

INSERT INTO ps_exercise_group (group_id, exercise_id, parent_exercise_id, order_in_group) VALUES
(1, 1, 14, 1),
(1, 2, 14, 2),
(1, 3, 14, 3),
(1, 4, 14, 4),
(1, 5, 14, 5),
(1, 6, 14, 6),
(1, 7, 14, 7),
(1, 8, 14, 8),
(1, 9, 14, 9),
(2, 11, 13, 1),
(2, 10, 13, 2),
(3, 1, 12, 1),
(3, 15, 12, 2),
(3, 3, 12, 3),
(3, 16, 12, 4),
(3, 5, 12, 5),
(3, 6, 12, 6),
(3, 7, 12, 7),
(3, 8, 12, 8),
(3, 9, 12, 9);

INSERT INTO ps_metric (id, name, unit, metric_type_id) VALUES
(1, 'seconds', 's', 1),
(2, 'minutes', 'min', 1),
(3, 'units', '', 2),
(4, 'kilometers', 'km', 3);

INSERT INTO ps_metric_type (id, name) VALUES
(1, 'time'),
(2, 'set'),
(3, 'distance');
