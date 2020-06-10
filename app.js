const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const journalRoute = require('./routes/journal');
app.use(express.static(path.join(__dirname, 'public')));

app.use(journalRoute);

app.listen(3000);