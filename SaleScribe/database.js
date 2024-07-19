const mysql = require('mysql2');

// Replace these with your actual database credentials
const db_config = {
    host: 'localhost',
    user: 'your_username',
    password: '123',
    database: 'sellers.customer',
};

// Create a connection pool
const pool = mysql.createPool(db_config);

// Get a connection from the pool
pool.getConnection((err, connection) => {
    if (err) throw err;

    // Perform database operations here...

    // Don't forget to release the connection when you're done
    connection.release();
});
