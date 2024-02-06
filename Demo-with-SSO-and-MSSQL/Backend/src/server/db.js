const sql = require('mssql');
const config = require('../config/config');

// Function to establish database connection
async function connect() {
    try {
        await sql.connect(config);
        console.log('Connected to MSSQL database');
    } catch (err) {
        console.error('Error connecting to MSSQL database:', err);
    }
}

// Call the connect function to establish the database connection
connect();

// Export the sql object along with the connect function
module.exports = { sql, connect };
