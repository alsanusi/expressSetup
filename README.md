# expressSetup

Basic express js setup for a new data-management project.

## Notes :bangbang:
This is the `basic package` setup that you need in order to start developing project in express js. Thanks me later!

## Prerequisites
- body-parser : "^1.19.0"
- ejs : ^2.6.2
- express : ^4.17.1
- express-flash : ^0.0.2
- express-myconnection : ^1.0.4
- express-session : ^1.16.2
- express-validator : ^5.3.1
- method-override: ^3.0.0
- mysql : ^2.17.1
- nodemon : ^1.19.1

## Installation

There are a few things to take a look for installing this expressSetup.

- First

Install all the package.
```bash
npm install
```

- Second

Setup the database configuration in `dbConfig.js`
```bash
var config = {
    database: {
        host: '', //localhost
        user: '', //root
        password: '',
        port: '', //3306
        database: '' //dbName
    },
    server: {
        host: '', //127.0.0.1
        port: '' //3000
    }
}
```

- Third

You can run the project by:
```bash
nodemon app.js
```


Take Note :heavy_exclamation_mark:

- The front-end will render by [ejs](https://ejs.co/), you may find it on `views/index.ejs`

Happy Coding :metal:
