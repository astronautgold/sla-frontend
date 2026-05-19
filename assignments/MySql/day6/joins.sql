CREATE DATABASE joins_task;

USE joins_task;

-- TASK 1

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

INSERT INTO courses VALUES
(1,'Java'),
(2,'Python'),
(3,'React');

INSERT INTO students VALUES
(101,'Ram',1),
(102,'Priya',2),
(103,'Kavi',NULL),
(104,'Arun',1);

-- INNER JOIN

SELECT students.student_name, courses.course_name
FROM students
INNER JOIN courses
ON students.course_id = courses.course_id;



-- TASK 2

-- LEFT JOIN

SELECT students.student_name, courses.course_name
FROM students
LEFT JOIN courses
ON students.course_id = courses.course_id;



-- TASK 3

-- RIGHT JOIN

SELECT students.student_name, courses.course_name
FROM students
RIGHT JOIN courses
ON students.course_id = courses.course_id;



-- TASK 4

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

INSERT INTO departments VALUES
(1,'HR'),
(2,'IT'),
(3,'Testing');

INSERT INTO employees VALUES
(201,'Ravi',1),
(202,'Meena',2),
(203,'John',NULL),
(204,'Divya',3);

-- INNER JOIN

SELECT employees.emp_name, departments.dept_name
FROM employees
INNER JOIN departments
ON employees.dept_id = departments.dept_id;



-- TASK 5

-- LEFT JOIN WITH NO DEPARTMENT

SELECT employees.emp_name,
IFNULL(departments.dept_name,'No Department') AS dept_name
FROM employees
LEFT JOIN departments
ON employees.dept_id = departments.dept_id;