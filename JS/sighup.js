const express = require("express");
const router = express.Router();
const db = require("./db");
const path = require("path");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(express.static(path.join(__dirname, '../styles')));
const webpage = path.join(__dirname, '../HTML');


router.get('/', (req, res) => {

    res.sendFile(`${webpage}/signup.html`);
});

router.post('/', (req, res) => {
    const { name, email, password, number } = req.body;
    const usertype = "user";
    const sql = "INSERT INTO data_setting (name, E_mail, password, number) VALUES (?, ?, ?, ?)";
    const values = [name, email, password, number, usertype];

    db.query(sql, values, function (err, results) {
        if (err) {
            console.error("Error:", err);
            res.status(500).json({ value: false, error: err.message });
        } else {
            console.log("Data is Stored");
            res.json({ value: true });
        }
    });
});



module.exports = router;