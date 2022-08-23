const inquirer = require('inquirer');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');
const table = require('console.table');
const team = [];

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
                case 'view all departments':
                    viewDepartments();
                    break;
                case 'view all roles':
                    viewRoles();
                    break;
                case 'view all employees':
                    viewEmployees();
                    break;
                case 'add a department':
                    addDepartment();
                    break;
                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                case 'update an employee role':
                    updateEmployeeRole();
                    break;
                default:
                    console.log('Goodbye');
                    process.exit();
                    break;
            }
        })
};

promptMenu()
.catch(err => {
    console.log(err);
});