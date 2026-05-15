CREATE DATABASE Aggregate;
USE Aggregate;
CREATE TABLE employees(id INT ,name VARCHAR(20),age INT, EMAIL VARCHAR(20), department VARCHAR(20), salary INT);
INSERT INTO employees(id,name,age, EMAIL, department, salary) VALUES (01,"RAMYA",22,"ASTRO@GMAIL.COM","IT",2200000);
INSERT INTO employees(id,name,age, EMAIL, department, salary) VALUES 
(02,"SAMYA",24,"SAMYA@GMAIL.COM","developers",2200),(03,"RABA",32,"RABE@GMAIL.COM","HJI",09000),(04,"RANMA",32,"RANMA@GMAIL.COM","JKKT",29000),
(05,"KJKS",52,"KJKS@GMAIL.COM","developers",78000
SELECT COUNT(*) AS total_employees FROM employees;
SELECT SUM(Salary) AS total_SALARY FROM employees;
SELECT MAX(Salary) AS MAX_SALARY FROM employees;
SELECT MIN(Salary) AS MIN_SALARY FROM employees;
SELECT COUNT(age>25) AS total_employees FROM employees;
SELECT SUM(Salary) AS total_Developers_SALARY FROM employees WHERE  department ="developers" ;
SELECT AVG(age) AS AVG_AGE FROM employees;
SELECT MAX(age) AS MAX_AGE FROM employees;
SELECT MIN(age) AS MIN_AGE FROM employees;