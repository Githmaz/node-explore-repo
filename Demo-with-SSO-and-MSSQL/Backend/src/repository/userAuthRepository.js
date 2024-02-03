const connection = require('./dbConfig');

// Function to save user data to the database
function saveUserData(displayName, email) {
    return new Promise((resolve, reject) => {
        // Create a new request
        const request = new Request(
            "INSERT INTO UserTable (DisplayName, Email) VALUES (@displayName, @email)",
            function(err) {
                if (err) {
                    console.error('Error inserting user data:', err);
                    reject(err);
                } else {
                    console.log('User data inserted successfully');
                    resolve();
                }
            }
        );

        // Add parameters to the request
        request.addParameter('displayName', TYPES.NVarChar, displayName);
        request.addParameter('email', TYPES.NVarChar, email);

        // Execute the request
        connection.execSql(request);
    });
}

// Export the saveUserData function
module.exports = { saveUserData };
