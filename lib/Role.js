const db = require('../db/connection');

module.exports = {
    getAllRoles() {
        return db.query(
            `SELECT * FROM roles`,
        )
    }
}