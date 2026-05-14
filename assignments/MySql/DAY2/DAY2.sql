SELECT * FROM college_db.employees;

ALTER TABLE employees ADD Salary INT;
INSERT INTO employees(id,name,age, EMAIL, department, salary) VALUES (01,"RAMYA",22,"ASTRO@GMAIL.COM","IT",2200000);
INSERT INTO employees(id,name,age, EMAIL, department, salary) VALUES 
(02,"SAMYA",24,"SAMYA@GMAIL.COM","developers",2200),(03,"RABA",32,"RABE@GMAIL.COM","HJI",09000),(04,"RANMA",32,"RANMA@GMAIL.COM","JKKT",29000),
(05,"KJKS",52,"KJKS@GMAIL.COM","developers",78000);

UPDATE employees SET Salary= 65000 WHERE id=03;
UPDATE employees SET department= "Testing" WHERE id=03;
UPDATE employees SET Salary= salary+5000 WHERE department= "developers";