const inquirer = require('inquirer');
// const db = require('./db/connection');
const Departments = require('./lib/Department');
const Employees = require('./lib/Employee');
const Roles = require('./lib/Role');
const team = [];

require('console.table');

const promptMenu = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    new inquirer.Separator(),
                    'Add A Department',
                    'Add A Role',
                    'Add An Employee',
                    'Update An Employee Role'
                ],
            }
        ])
        .then(choice => {
            switch (choice.menu) {
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'View All Employees':
                    return viewEmployees();
                case 'Add A Department':
                    addDepartment();
                    break;
                case 'Add A Role':
                    addRole();
                    break;
                case 'Add An Employee':
                    addEmployee();
                    break;
                case 'Update An Employee Role':
                    updateEmployeeRole();
                    break;
                default:
                    console.log('Goodbye');
                    process.exit();
                    break;
            }
        })
};

const viewDepartments = async() => {
    const [departments] = await Departments.getAllDepartments();
    console.table(departments);
    promptMenu();
};

const viewRoles = async() => {
    const [roles] = await Roles.getAllRoles();
    console.table(roles);
    promptMenu();
};

const viewEmployees = async() => {
    const [employees] = await Employees.getAllEmployees();
    console.table(employees);
    promptMenu();
};

const addDepartment = () => {
    console.log(`
    ================
    Add a Department
    ================
    `)

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: "What is the name of the new department?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the new department!');
                        return false;
                    }
                }
            }
        ])
};

const addRole = () => {
    console.log(`
    ===========
    Add a Role
    ===========
    `)

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: "What is the new role you'd like to add?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the new role!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'salary',
                message: "What is the salary for this new role?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the salary for this new role!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'departmentId',
                message: "Please choose a department for the new role",
                choices: [{
                    //department id data from departments table
                }],
            }
        ])
}

const addEmployee = () => {
    console.log(`
    ===============
    Add an Employee
    ===============
    `)

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'lastName',
                message: "What is the employee's last name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide the last name of the new employee');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: "Please select a role for the new employee.",
                choices: [{
                    // insert roles table data
                }]
            },
            {
                type: 'list',
                name: 'manager',
                message: "Please select a manager for the new employee.",
                choices: [{
                    // insert managers (or supervisors/superiors) data from employees table
                }]
            }
        ])
}

const updateEmployeeRole = () => {
    console.log(`
    ==========================
    Update an Employee's Role
    ==========================
    `)

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'employees',
                message: "Please select an employee to update.",
                choices: [{
                    // insert employee table data
                }]
            },
            {
                type: 'list',
                name: 'chooseRole',
                message: `Please select a new role for ${Employee}.`, // not sure if this is correct, will talk to TA for help
                choices: [{
                    // insert roles table data
                }]
            }
        ])
}

promptMenu()
.catch(err => {
    console.log(err);
});