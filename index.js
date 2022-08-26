const inquirer = require('inquirer');
// const db = require('./db/connection');
const Departments = require('./lib/Department');
const Employees = require('./lib/Employee');
const { addNewRole } = require('./lib/Role');
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
                    'Update An Employee Role',
                    'Quit'
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

const addDepartment = async() => {
    console.log(`
    ================
    Add a Department
    ================
    `)

    const newDepartment = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
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
        const departmentsData = await Departments.addNewDepartment(newDepartment)
        const [departments] = await Departments.getAllDepartments();
        console.table(departments);
        promptMenu();
};

const addRole = async() => {
    console.log(`
    ===========
    Add a Role
    ===========
    `)

    const [departments] = await Departments.getAllDepartments();
    const choices = departments.map(({id, name}) => ({
        name,
        value: id        
    }));

    const newRole = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
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
                name: 'department_id',
                message: "Please choose a department for the new role",
                choices
            }
        ])
        const rolesData = await Roles.addNewRole(newRole);
        console.log(rolesData);
        viewRoles();
        promptMenu();
        
}



const addEmployee = async() => {
    console.log(`
    ===============
    Add an Employee
    ===============
    `)

    const [employees] = await Employees.getAllEmployees();
    const [roles] = await Roles.getAllRoles();
    const choices = roles.map(({id, title}) => ({
        name: title,
        value: id
    }));
    const managers = employees.map(({id, first_name, last_name}) => ({
        name:`${first_name} ${last_name}`,
        value: id 
    }));

    const newEmployee = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
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
                name: 'last_name',
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
                name: 'role_id',
                message: "Please select a role for the new employee.",
                choices
            },
            {
                type: 'list',
                name: 'manager_id',
                message: "Please select a manager for the new employee.",
                choices: managers
            }
        ])
        const employeesData = await Employees.addNewEmployee(newEmployee);
        console.log(employeesData);
        viewEmployees();
        promptMenu();
}

const updateEmployeeRole = async() => {
    console.log(`
    ==========================
    Update an Employee's Role
    ==========================
    `)

    const [employees] = await Employees.getAllEmployees();
    const [roles] = await Roles.getAllRoles();
    const employeeChoices = employees.map(({id, first_name, last_name}) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    const choices = roles.map(({id, title}) => ({
        name: title,
        value: id
    }));

    const updateEmployee = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'employees',
                message: "Please select an employee to update.",
                choices: employeeChoices
            },
            {
                type: 'list',
                name: 'chooseRole',
                message: `Please select a new role for the employee.`,
                choices
            }
        ])
        const employeesData = await Employees.updateEmployeeRole(updateEmployee);
        console.log(employeesData);
        viewEmployees();
        promptMenu();
}

promptMenu()
.catch(err => {
    console.log(err);
});