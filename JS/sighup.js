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

    res.json({ value: true });
});



module.exports = router;