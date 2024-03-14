const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product'); 
require('dotenv').config(); 

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.listen(8009, () => {
    console.log("Server started on http://localhost:8009");
});
