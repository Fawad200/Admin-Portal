const express = require('express');
const router = express.Router();
const path = require("path")

// Homepage route

// router.get('/', (req, res) => {

// });


router.get('/', (req, res) => {

    // res.send('Welcome to the Dashboard!');

    res.sendFile(path.join(__dirname, '../HTML/welcome.html'));


});

module.exports = router;