CREATE TABLE ps_event (
  id int NOT NULL AUTO_INCREMENT,
  event_type_id int NOT NULL,
  user_id int NOT NULL,
  event_date varchar(250) NOT NULL,
  PRIMARY KEY(id)
);

