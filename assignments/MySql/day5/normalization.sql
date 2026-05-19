CREATE DATABASE management_systems;

USE management_systems;

-- RESULT MANAGEMENT SYSTEM

CREATE TABLE student (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    department VARCHAR(30)
);

CREATE TABLE subject (
    subject_id VARCHAR(10) PRIMARY KEY,
    subject_name VARCHAR(50)
);

CREATE TABLE result (
    result_id VARCHAR(10) PRIMARY KEY,
    student_id INT,
    subject_id VARCHAR(10),
    marks INT,
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (subject_id) REFERENCES subject(subject_id)
);

INSERT INTO student VALUES
(101,'Ram','IT'),
(102,'Priya','CSE');

INSERT INTO subject VALUES
('S1','DBMS'),
('S2','Java');

INSERT INTO result VALUES
('R1',101,'S1',90),
('R2',101,'S2',85);



-- BANK MANAGEMENT SYSTEM

CREATE TABLE customer (
    customer_id VARCHAR(10) PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(30)
);

CREATE TABLE account (
    account_no VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10),
    account_type VARCHAR(20),
    balance INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);

CREATE TABLE transactions (
    transaction_id VARCHAR(10) PRIMARY KEY,
    account_no VARCHAR(10),
    amount INT,
    transaction_type VARCHAR(20),
    FOREIGN KEY (account_no) REFERENCES account(account_no)
);

INSERT INTO customer VALUES
('C101','Arun','Chennai'),
('C102','Divya','Madurai');

INSERT INTO account VALUES
('A1001','C101','Savings',50000),
('A1002','C102','Current',75000);

INSERT INTO transactions VALUES
('T1','A1001',5000,'Deposit'),
('T2','A1002',2000,'Withdraw');



-- MOVIE BOOKING SYSTEM

CREATE TABLE movie (
    movie_id VARCHAR(10) PRIMARY KEY,
    movie_name VARCHAR(50),
    language VARCHAR(20)
);

CREATE TABLE theater (
    theater_id VARCHAR(10) PRIMARY KEY,
    theater_name VARCHAR(50),
    location VARCHAR(30)
);

CREATE TABLE shows (
    show_id VARCHAR(10) PRIMARY KEY,
    movie_id VARCHAR(10),
    theater_id VARCHAR(10),
    show_time VARCHAR(20),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (theater_id) REFERENCES theater(theater_id)
);

CREATE TABLE booking (
    booking_id VARCHAR(10) PRIMARY KEY,
    show_id VARCHAR(10),
    customer_name VARCHAR(50),
    seats INT,
    FOREIGN KEY (show_id) REFERENCES shows(show_id)
);

INSERT INTO movie VALUES
('M1','Leo','Tamil'),
('M2','Vikram','Tamil');

INSERT INTO theater VALUES
('T1','PVR','Chennai'),
('T2','INOX','Coimbatore');

INSERT INTO shows VALUES
('SH1','M1','T1','10:00 AM'),
('SH2','M2','T2','2:00 PM');

INSERT INTO booking VALUES
('B1','SH1','Ramya',2),
('B2','SH2','Kavi',3);