const mysql = require('mysql');
const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
};
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = pool;