CREATE TABLE ps_exercise (
  id int IDENTITY(1,1) PRIMARY KEY,
  name varchar(250) NOT NULL,
  metric_id int NOT NULL,
  suggested_load int NOT NULL,
  is_exercise int NOT NULL DEFAULT '0'
);

