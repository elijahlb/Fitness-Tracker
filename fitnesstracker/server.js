const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");


// requires .env file
require('dotenv').config();

//imports middlewares file
const middlewares = require('./middlewares');
const logs = require('./src/api/logs');


const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

app.use(morgan("common"));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
// body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.json({
        Message: 'hello world'
    });
});

app.use('/api/logs', logs);


// NOT FOUND MIDDLEWARE
app.use(middlewares.notFound);
// GENERAL ERROR HANDLING
app.use(middlewares.errorHandler);


const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);

});
