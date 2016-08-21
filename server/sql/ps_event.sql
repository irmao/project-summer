CREATE TABLE ps_event (
  id int NOT NULL,
  event_type_id int NOT NULL,
  user_id int NOT NULL,
  event_date date NOT NULL
);

INSERT INTO ps_event (id, event_type_id, user_id, event_date) VALUES
(1, 1, 1, '2016-08-24'), -- default goal
(2, 2, 1, '2016-08-22'), -- default planned
(3, 3, 1, '2016-08-21'), -- done 1
(4, 3, 1, '2016-08-20'); -- done 2  

ALTER TABLE ps_event
  ADD PRIMARY KEY (id);
