// login.js
//added a coment for feature1

const express = require('express');
const router = express.Router();
const db = require('./db');
const path = require('path');


router.use(express.static(path.join(__dirname, '../styles')));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../HTML/login.html'));
});

router.post('/', (req, res) => {

    const { username, password } = req.body;


    db.query(` SELECT name,password FROM data_setting WHERE  AND name = '${username}' AND password = '${password}'`, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        if (results.length > 0) {
            res.send('Welcome to the dashboard!');
        } else {
            res.status(401).send('Invalid username or password');
        }
    });
});

module.exports = router;