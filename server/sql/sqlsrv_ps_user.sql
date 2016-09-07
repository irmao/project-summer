CREATE TABLE ps_user (
  id int IDENTITY(1,1) PRIMARY KEY,
  first_name varchar(250) NOT NULL,
  last_name varchar(250),
  email varchar(250),
  passwd varchar(250)
);

