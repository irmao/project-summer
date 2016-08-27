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
