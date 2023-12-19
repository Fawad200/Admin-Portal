const express = require('express');
const route = express.Router();
const db = require('./db');
const path = require('path');
const { error } = require('console');

route.use(express.static(path.join(__dirname, "../styles")))

route.use((req, res, next) => {
    console.log('Auth Middleware:', req.session.isAuthenticated);
    if (req.session.isAuthenticated) {
        next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
        console.log('Redirecting to login...');
        res.send("Access Denied")// Redirect to the login page if not authenticated
    }
});

route.get('/', (req, res) => {

    db.connect(function (error) {
        if (error) console.log(error);

        const sqldt = "select *  from data_setting where id=?";

        const vals = req.query.id;

        db.query(sqldt, [vals], function (error, result) {
            if (error) console.log(error);
            res.render('../Ejs/update_rec', { disdata: result });

        });

    });

});

module.exports = route