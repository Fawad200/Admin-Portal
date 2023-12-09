const express = require('express');
const router = express.Router();
const db = require("./db");
const path = require('path');
const { error } = require('console');

// router.get('/', (req, res) => {
//     db.query(`Select * FROM data_setting`, (error, db_data) => {
//         res.render(path.join(__dirname, "records.ejs"))
//     })
// });

router.get('/', (req, res) => {
    db.query(`SELECT * FROM data_setting`, (error, values) => {
        if (error) console.log(error);
        res.render(path.join(__dirname, 'records.ejs'), { db_data: values })
    })
})
module.exports = router;
