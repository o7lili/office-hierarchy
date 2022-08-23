INSERT INTO departments (name)
    VALUES
        ('Sales'),
        ('Estimating'),
        ('Engineering'),
        ('Accounting'),
        ('Project Management'),
        ('Logistics');

INSERT INTO roles (title, salary, department_id)
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

INSERT INTO employees (first_name, last_name, role_id, manager_id)
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
