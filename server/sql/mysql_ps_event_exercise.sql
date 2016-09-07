CREATE TABLE ps_event_exercise (
  id int NOT NULL AUTO_INCREMENT,
  event_id int NOT NULL,
  exercise_id int NOT NULL,
  exercise_load int NOT NULL,
  PRIMARY KEY(id)
);

