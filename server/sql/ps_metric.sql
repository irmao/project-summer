CREATE TABLE ps_metric (
  id int NOT NULL,
  name varchar(250) NOT NULL,
  unit varchar(250) NOT NULL,
  metric_type_id int NOT NULL
);

INSERT INTO ps_metric (id, name, unit, metric_type_id) VALUES
(1, 'seconds', 's', 1),
(2, 'minutes', 'min', 1),
(3, 'units', '', 2),
(4, 'kilometers', 'km', 3);

ALTER TABLE ps_metric
  ADD PRIMARY KEY (id);
