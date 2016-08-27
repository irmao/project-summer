CREATE TABLE ps_user (
  id int IDENTITY(1,1) PRIMARY KEY,
  first_name varchar(250) NOT NULL,
  last_name varchar(250),
  email varchar(250),
  passwd varchar(250)
);

INSERT INTO ps_user (first_name, last_name, email) VALUES
('Vinicius', 'Dias', 'v.fernandesdias@gmail.com');

