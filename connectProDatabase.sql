create database connectpro;
-------------------------------------------------------------------------------------------------
use connectpro;
----------------------------------------------------------------------------------------------------------
CREATE TABLE customers (
customer_ID char(36),
firstName varchar(255),
lastName varchar(255),
email varchar(255),
username varchar(255) unique ,
mobile varchar(255),
password text,
createdAt datetime,
updatedAt datetime
);
-----------------------------------------------------------------------------------------------------
INSERT INTO customers(customer_ID ,firstName,lastName, email, username, mobile, password,`createdAt`,`updatedAt`) VALUES(UUID(),'Mark','Johnson','mark@gmail.com', 'markjohnson01','08467839273','QWE01','2023-03-09 11:58:33','2023-03-09 11:58:35');
INSERT INTO customers(customer_ID ,firstName,lastName, email, username, mobile, password,`createdAt`,`updatedAt`) VALUES(UUID(),'Mary','Brown','marry@outlook.com', 'marybrown101','0838930186','MNB09','2023-03-09 11:58:33','2023-03-09 11:58:35');