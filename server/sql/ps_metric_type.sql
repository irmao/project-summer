CREATE TABLE ps_metric_type (
  id int NOT NULL,
  name varchar(250) NOT NULL
);

INSERT INTO ps_metric_type (id, name) VALUES
(1, 'time'),
(2, 'set'),
(3, 'distance');

ALTER TABLE ps_metric_type
  ADD PRIMARY KEY (id);
