const express = require('express');
const router = express.Router();
const path = require('path')

// Homepage route
router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../HTML/Welcome.html'));

});

module.exports = router;