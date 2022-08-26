const db = require('../db/connection');

// employee queries
module.exports = {
    getAllEmployees() {
        return db.query(
            `SELECT * FROM employees`,
        )
    },

    addNewEmployee({first_name, last_name, role_id, manager_id}) {
        return db.query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`,
            [first_name, last_name, role_id, manager_id]
        )
    },

    updateEmployeeRole({first_name, last_name, role_id, manager_id}) {
        return db.query(
            `UPDATE employees SET role_id = ? WHERE id =?;`,
            [first_name, last_name, role_id, manager_id]
        )
    }
}