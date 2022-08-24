const db = require('../db/connection');

// employee queries
module.exports = {
    getAllEmployees() {
        return db.query(
            `SELECT * FROM employees`,
        )
    }
}