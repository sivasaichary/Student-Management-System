-- =========================
-- DATABASE CREATION
-- =========================

-- Create a new database named student_db
CREATE DATABASE student_db;

-- Select (use) the database so all operations happen inside it
USE student_db;


-- =========================
-- TABLE CREATION
-- =========================

-- Create a table 'students' to store student details
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique ID for each student (auto increases)
    name VARCHAR(100),                  -- Student name
    age INT,                            -- Student age
    course VARCHAR(100)                 -- Course name
);


-- =========================
-- INSERT (CREATE)
-- =========================

-- Insert sample student records into the table
INSERT INTO students (name, age, course)
VALUES 
('Rahul', 20, 'CSE'),
('Anita', 21, 'ECE'),
('Kiran', 19, 'IT');

