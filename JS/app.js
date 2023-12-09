const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

const loginRouter = require('./login');
const welcomeRouter = require('./welcome');
const dashbords = require('./dashbord');
const signup = require("./sighup");
const record = require("./record")


app.use(cors());

const port = 3000;

app.use(bodyParser.json());

app.use('/', welcomeRouter);

app.use('/login', loginRouter);

app.use('/dashbord', dashbords);

app.use('/signup', signup);

app.use('/record', record);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});