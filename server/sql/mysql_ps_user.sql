CREATE TABLE ps_user (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(250) NOT NULL,
  last_name varchar(250),
  email varchar(250),
  passwd varchar(250),
  PRIMARY KEY(id)
);

INSERT INTO ps_user (first_name, last_name, email) VALUES
('Vinicius', 'Dias', 'v.fernandesdias@gmail.com');

