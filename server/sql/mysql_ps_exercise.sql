CREATE TABLE ps_exercise (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(250) NOT NULL,
  metric_id int NOT NULL,
  suggested_load int NOT NULL,
  is_exercise int NOT NULL DEFAULT '0',
  PRIMARY KEY(id)
);

