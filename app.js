const express = require('express')
const app = express()

// Load MySql Configuration
const mysql = require('mysql')
const myConnection = require('express-myconnection')

// Load Database Configuration
const dbConfig = require('./dbConfig')
const dbOption = {
    host: dbConfig.database.host,
    user: dbConfig.database.user,
    password: dbConfig.database.password,
    port: dbConfig.database.port,
    database: dbConfig.database.database
}

// Database
app.use(myConnection(mysql, dbOption, 'pool'))

// Localhost: 3003
app.listen(3003, () => {
    console.log("Server Run at Port 3003: http://127.0.0.1:3003")
})

// Default EndPoint
app.get('/', (req, res) => {
    res.send('Hello')
})