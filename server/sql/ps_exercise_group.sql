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
