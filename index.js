const express = require('express');
const mysql = require('mysql');

//  Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "You_DB_Name"
})

// Connect to MYSQL
db.connect((err) => {
    if(err){
        // throw  err
    }
    console.log('MySQL is Connected');
  
})

// db.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
  
//     console.log('Connected to the MySQL server.');
//   });

const app = express();

// Create Database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql,err => {
        if(err){
            // throw err
        }
        res.send('Database Created')
    })
})

 app.listen('1100', () => {
    console.log('Server Started on port 1100');
 })