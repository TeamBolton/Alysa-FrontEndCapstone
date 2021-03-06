DROP DATABASE IF EXISTS rewhy_rec;

CREATE DATABASE rewhy_rec;

USE rewhy_rec;

-- DROP TABLE IF EXISTS types, categories, recommended;

CREATE TABLE RECOMMENDED (
  id int NOT NULL AUTO_INCREMENT,
  type_id int,
  category_id int,
  image_url varchar(255) NOT NULL,
  brand varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  ratings decimal(2, 1) NOT NULL,
  reviews int NOT NULL,
  price decimal(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

