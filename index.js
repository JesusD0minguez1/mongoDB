const express = require('express');
const bParser = require('body-parser');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
const pug = require('pug');


const urlencodedParser = bParser.urlencoded({
    extended: true
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);





app.listen(3000);
