const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const session = require('express-session');

const loginRouter = require('./login');
const welcomeRouter = require('./welcome');
const user = require('./user');
const signup = require("./sighup");
const record = require("./record");
const rec_up = require('./rec_update');


app.use(session({
    secret: 'top_hidden',
    resave: false,
    saveUninitialized: true
}));


app.use(cors());

const port = 3000;

app.use(bodyParser.json());

app.use('/', welcomeRouter);

app.use('/login', loginRouter);

app.use('/user', user);

app.use('/signup', signup);

app.use('/record', record);

app.use('/update', rec_up)





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});