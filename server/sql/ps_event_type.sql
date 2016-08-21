CREATE TABLE ps_event_type (
  id int NOT NULL,
  name varchar(250) NOT NULL
);

INSERT INTO ps_event_type (id, name) VALUES
(1, 'Goal'),
(2, 'Planned'),
(3, 'Done');

ALTER TABLE ps_event_type
  ADD PRIMARY KEY (id);
