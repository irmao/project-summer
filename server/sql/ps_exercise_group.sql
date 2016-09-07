CREATE TABLE ps_exercise_group (
  group_id int NOT NULL,
  exercise_id int NOT NULL,
  parent_exercise_id int NOT NULL,
  order_in_group int DEFAULT NULL
);

