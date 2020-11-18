DROP DATABASE IF EXISTS rewhy;

CREATE DATABASE rewhy;

USE rewhy;

DROP TABLE IF EXISTS types, categories, recommended;

CREATE TABLE types (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recommended (
  id int NOT NULL AUTO_INCREMENT,
  type_id int,
  category_id int,
  image_url varchar(255) NOT NULL,
  brand varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  ratings decimal(2, 1) NOT NULL,
  reviews int NOT NULL,
  price decimal(10, 2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (type_id) REFERENCES types(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

