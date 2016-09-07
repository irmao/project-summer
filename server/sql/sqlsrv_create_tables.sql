CREATE TABLE ps_event_exercise (
  id int IDENTITY(1,1) PRIMARY KEY,
  event_id int NOT NULL,
  exercise_id int NOT NULL,
  exercise_load int NOT NULL
);

CREATE TABLE ps_event (
  id int IDENTITY(1,1) PRIMARY KEY,
  event_type_id int NOT NULL,
  user_id int NOT NULL,
  event_date varchar(250) NOT NULL
);

CREATE TABLE ps_exercise (
  id int IDENTITY(1,1) PRIMARY KEY,
  name varchar(250) NOT NULL,
  metric_id int NOT NULL,
  suggested_load int NOT NULL,
  is_exercise int NOT NULL DEFAULT '0'
);

CREATE TABLE ps_user (
  id int IDENTITY(1,1) PRIMARY KEY,
  first_name varchar(250) NOT NULL,
  last_name varchar(250),
  email varchar(250),
  passwd varchar(250)
);

CREATE TABLE ps_event_type (
  id int NOT NULL,
  name varchar(250) NOT NULL
);

ALTER TABLE ps_event_type
  ADD PRIMARY KEY (id);

CREATE TABLE ps_exercise_group (
  group_id int NOT NULL,
  exercise_id int NOT NULL,
  parent_exercise_id int NOT NULL,
  order_in_group int DEFAULT NULL
);

CREATE TABLE ps_metric (
  id int NOT NULL,
  name varchar(250) NOT NULL,
  unit varchar(250) NOT NULL,
  metric_type_id int NOT NULL
);

ALTER TABLE ps_metric
  ADD PRIMARY KEY (id);

CREATE TABLE ps_metric_type (
  id int NOT NULL,
  name varchar(250) NOT NULL
);

ALTER TABLE ps_metric_type
  ADD PRIMARY KEY (id);

