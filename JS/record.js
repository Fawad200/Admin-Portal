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
