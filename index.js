require('dotenv').config();
const express = require('express')
const path = require('path');

const routes = require('./routes/students.routes');

const PORT = process.env.PORT || 8008;

const app = express();

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

//Engine template
app.set('views', 'views');
app.set('view engine', 'ejs');

//Routes
app.use(routes);

//Server listening
app.listen(PORT, (error) => {
    if (error) console.log(error);

    console.log(`Server running on ${PORT}`);
})