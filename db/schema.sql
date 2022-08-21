DROP DATABASE IF EXISTS employees
CREATE DATABASE employees;
USE employees;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENTPRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    CONSTRAINT uc_name unique (name)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENTPRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENTPRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
);