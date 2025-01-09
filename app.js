const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

// set body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = require('./routes/api');
app.use('/', route);

// buat server nya
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});