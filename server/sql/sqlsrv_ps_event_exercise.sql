CREATE TABLE ps_event_exercise (
  id int IDENTITY(1,1) PRIMARY KEY,
  event_id int NOT NULL,
  exercise_id int NOT NULL,
  exercise_load int NOT NULL
);

