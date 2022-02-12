module.exports = () => {
    const express = require('express');
    const app = express();
    
    const bodyparser = require('body-parser');
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    
    const connection = require('../config/mysql');
    connection.connect(
        err => {
            if (err) {
                console.log(err);
                return;
            }
        }
    );

    const consign = require('consign');
    consign()
        .include('controllers')
        .into({app, connection});

    return app
}