const db = require('../db/connection');

module.exports = {
    getAllDepartments() {
        return db.query(
            `SELECT * FROM departments`,
        )
    },

    addNewDepartment({name}) {
        console.log(name);
        return db.query(
            `INSERT INTO departments (name) VALUES (?);`,
            [name]
        )
    }
}