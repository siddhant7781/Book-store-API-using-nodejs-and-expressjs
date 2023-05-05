const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes/book-route');
const port = 5000;

dotenv.config({ path: './config.env' });

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use('/books', router);

//DATABASE CONNECTION
mongoose.connect(`mongodb+srv://admin:${process.env.DATABASE_PASSWORD}@cluster0.sx1uz1w.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log("Connected to Database"))
    .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
    .catch((err) => console.log(err));




