const db = require('../db/connection');

module.exports = {
    getAllRoles() {
        return db.query(
            `SELECT * FROM roles`,
        )
    },
    
    addNewRole({title, salary, department_id}) {
        return db.query(
            `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?);`,
            [title, salary, department_id]
        )
    }
}