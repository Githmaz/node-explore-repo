// db.js
const sql = require('mssql');

// Configuration for connecting to MSSQL database
module.exports =  {
    user: 'sa',
    password: 'dockerStrongPwd123',
    server: 'localhost', // You can use the IP address or hostname
    database: 'UserData',
    options: {
        encrypt: false // If you're using Windows Azure
    }
};


