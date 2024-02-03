const Connection = require('tedious').Connection;
const config = {
    server: 'localhost',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'dockerStrongPwd123'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'UserData',
        trustServerCertificate: true
    }
};
const connection = new Connection(config);
// connection.on('connect', function(err) {
//     if (err) {
//         console.error('Error connecting to MSSQL:', err);
//     } else {
//         console.log("Connected to MSSQL");
//     }
// });
//
// connection.connect();

module.exports = connection;
