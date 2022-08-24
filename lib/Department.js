const db = require('../db/connection');

module.exports = {
    getAllDepartments() {
        return db.query(
            `SELECT * FROM departments`,
        )
    }
}