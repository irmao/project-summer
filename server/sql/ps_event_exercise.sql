CREATE TABLE ps_event_exercise (
  id int NOT NULL,
  event_id int NOT NULL,
  exercise_id int NOT NULL,
  exercise_load int NOT NULL
);

INSERT INTO ps_event_exercise (id, event_id, exercise_id, exercise_load) VALUES
(1, 1, 2, 60),
(2, 1, 3, 30),
(3, 2, 2, 20),
(4, 2, 3, 10),
(5, 3, 2, 10),
(6, 3, 3, 10);

ALTER TABLE ps_event_exercise
  ADD PRIMARY KEY (id);
