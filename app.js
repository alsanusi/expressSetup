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

// Express Validator Middleware for Form Validation
const expressValidator = require('express-validator')
app.use(expressValidator())

//Setting up templaing view engine - EJS
app.set('view engine', 'ejs')
app.use(express.static("views"))

// body-parser is used to read HTTP POST data from Form Input.
var bodyParser = require('body-parser')
// bodyParser.urlencoded() parses the text as URL encoded data.
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// body-parser is used to read HTTP POST data from Form Input.
var bodyParser = require('body-parser')
// bodyParser.urlencoded() parses the text as URL encoded data.
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// Flash messages in order to show success or error message.
const flash = require('express-flash')
app.use(flash())

// Localhost: 3003
app.listen(3003, () => {
    console.log("Server Run at Port 3003: http://127.0.0.1:3003")
})

// Default EndPoint
app.get('/', (req, res) => {
    res.send('Hello')
})