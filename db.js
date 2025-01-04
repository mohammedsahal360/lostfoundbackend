const mysql = require('mysql2');
require('dotenv').config(); // To load environment variables from .env file

const connection = mysql.createConnection({
    host: process.env.RAILWAY_PRIVATE_DOMAIN,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;
