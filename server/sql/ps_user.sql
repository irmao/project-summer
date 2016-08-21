CREATE TABLE ps_user (
  id int NOT NULL,
  first_name varchar(250) NOT NULL,
  last_name varchar(250),
  email varchar(250),
  passwd varchar(250)
);

INSERT INTO ps_user (id, first_name, last_name, email) VALUES
(1, 'Vinicius', 'Dias', 'v.fernandesdias@gmail.com');

ALTER TABLE ps_user
  ADD PRIMARY KEY (id);
