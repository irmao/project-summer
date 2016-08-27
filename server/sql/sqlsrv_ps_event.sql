CREATE TABLE ps_event (
  id int IDENTITY(1,1) PRIMARY KEY,
  event_type_id int NOT NULL,
  user_id int NOT NULL,
  event_date varchar(250) NOT NULL
);

INSERT INTO ps_event (event_type_id, user_id, event_date) VALUES
(1, 1, '2016-08-24'), -- default goal
(2, 1, '2016-08-22'), -- default planned
(3, 1, '2016-08-21'); -- done
