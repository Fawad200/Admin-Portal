const express = require('express');
const router = express.Router();
const db = require("./db");
const path = require('path');
const { error } = require('console');

// Authentication middleware
router.use((req, res, next) => {
    console.log('Auth Middleware:', req.session.isAuthenticated);
    if (req.session.isAuthenticated) {
        next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
        console.log('Redirecting to login...');
        res.redirect('/login'); // Redirect to the login page if not authenticated
    }
});
// Logout route
router.get('/logout', (req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        } else {
            // Redirect to the login page after logout
            res.redirect('/login');
        }
    });
});


router.get('/', (req, res) => {
    db.query(`SELECT * FROM data_setting`, (error, values) => {
        if (error) console.log(error);
        res.render(path.join(__dirname, 'records.ejs'), { db_data: values })
    })
});


router.get('/delete', (req, res) => {
    const del_id = req.query.id;
    console.log(del_id);
    db.query(`delete from data_setting where id = ${del_id}`, (error, result) => {
        if (error) console.log(error);

    })

    res.redirect('/record');

});


module.exports = router;
