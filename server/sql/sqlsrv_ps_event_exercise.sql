CREATE TABLE ps_event_exercise (
  id int IDENTITY(1,1) PRIMARY KEY,
  event_id int NOT NULL,
  exercise_id int NOT NULL,
  exercise_load int NOT NULL
);

INSERT INTO ps_event_exercise (event_id, exercise_id, exercise_load) VALUES
(1, 2, 60),
(1, 3, 30),
(2, 2, 20),
(2, 3, 10),
(3, 2, 10),
(3, 3, 10);
