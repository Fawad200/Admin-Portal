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

// To Display data in database
route.get('/', (req, res) => {

    db.connect(function (error) {
        if (error) console.log(error);


        const sqldt = "select *  from data_setting where id=?";

        const vals = req.query.id;

        db.query(sqldt, [vals], function (error, result) {
            if (error) console.log(error);
            res.render('../../Ejs/update_rec', { disdata: result });

        });

    });

});
// TO update data in Database
route.post('/up_rec', (req, res) => {
    console.log('Received update request:', req.body);
    console.log('I am working');
    let namez = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let number = req.body.number;
    let id = req.body.id;

    const sqldt = "UPDATE   data_setting set name=?, E_mail=?, password=?, number=? where id=?";

    db.query(sqldt, [namez, email, password, number, id], function (error, result) {
        if (error) console.log("error is here", error);
        // res.redirect('/record')

    });


    res.json({ message: 'Update successful' }); // Respond with a JSON message
});

module.exports = route