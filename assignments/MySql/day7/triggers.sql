CREATE DATABASE trigger_tasks;

USE trigger_tasks;

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    marks INT
);

CREATE TABLE student_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(100)
);

DELIMITER //

CREATE TRIGGER after_student_insert
AFTER INSERT
ON students
FOR EACH ROW
BEGIN
    INSERT INTO student_log(message)
    VALUES (CONCAT('New student inserted: ', NEW.student_name));
END //

DELIMITER ;

-- INSERT VALUE

INSERT INTO students VALUES
(1,'Ram',90);

-- VIEW LOG TABLE

SELECT * FROM student_log;