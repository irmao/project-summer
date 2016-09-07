CREATE TABLE ps_metric (
  id int NOT NULL,
  name varchar(250) NOT NULL,
  unit varchar(250) NOT NULL,
  metric_type_id int NOT NULL
);

ALTER TABLE ps_metric
  ADD PRIMARY KEY (id);

