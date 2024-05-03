const express = require('express');
const router = express.Router();
const path = require("path")



router.get('/', (req, res) => {

    // res.send('Welcome to the Dashboard!');

    res.sendFile(path.join(__dirname, '../HTML/user.html'));


});

module.exports = router;