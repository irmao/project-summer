CREATE TABLE ps_event (
  id int IDENTITY(1,1) PRIMARY KEY,
  event_type_id int NOT NULL,
  user_id int NOT NULL,
  event_date varchar(250) NOT NULL
);

