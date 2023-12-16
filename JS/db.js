const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'data_mang',
    // authPlugin: 'mysql_native_password', // Add this line
});

db.connect((err) => {

    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    // console.log('Connected to MySQL database');
});

module.exports = db;
