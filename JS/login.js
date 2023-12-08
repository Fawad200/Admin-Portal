// login.js
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

    const sql = 'SELECT * FROM data_setting WHERE name = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
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