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
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENTPRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) on DELETE SET NULL
);

INSERT INTO department (name)
    VALUES
        ('Sales'),
        ('Estimating'),
        ('Engineering'),
        ('Accounting'),
        ('Project Management'),
        ('Logistics');

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Salesperson'),
        ('Estimator'),
        ('Senior Engineer'),
        ('Engineer'),
        ('Programmer'),
        ('Senior Accountant'),
        ('Accountant'),
        ('Project Manager'),
        ('Project Coordinator');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('')
