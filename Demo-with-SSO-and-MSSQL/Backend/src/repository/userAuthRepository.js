const { sql, connect } = require('../server/db');



// Function to get table names from the database
async function getTableNames() {
    try {
        const result = await sql.query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES");
        return result.recordset.map(row => row.TABLE_NAME);
    } catch (err) {
        console.error('Error fetching table names:', err);
        return null;
    }
}

module.exports = { getTableNames };
