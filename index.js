const inquirer = require('inquirer');
// const db = require('./db/connection');
const Department = require('./lib/Department');
const Employees = require('./lib/Employee');
const Role = require('./lib/Role');
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

const viewEmployees= async() => {
    const [employees] = await Employees.getAllEmployees();
    console.table(employees);
}

promptMenu()
.catch(err => {
    console.log(err);
});