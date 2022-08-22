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
        ('Salesperson', 80000, 1),
        ('Estimator', 55000, 2),
        ('Senior Engineer', 70000, 3),
        ('Engineer', 60000, 3),
        ('Programmer', 57000, 3),
        ('Senior Accountant', 80000, 4),
        ('Accountant', 60000, 4),
        ('Project Manager', 65000, 5),
        ('Project Coordinator', 45000, 5),
        ('Logistics Manager', 50000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Marceline', 'Vampire Queen', 1, NULL ),
        ('Peppermint', 'Butler', 2, 1),
        ('Bonnie', 'Bubblegum', 3, NULL),
        ('Marshall', 'Lee', 4, 3),
        ('Bee', 'Mo', 5, 3),
        ('Flame', 'Princess', 6, NULL),
        ('Cinnamon', 'Bun', 7, 6),
        ('Finn', 'The Human', 8, 1),
        ('Jake', 'The Dog', 9, 8),
        ('Ice', 'King', 10, NULL);
