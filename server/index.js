const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const quotesRoute = require('./routes/quotes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/quotes', quotesRoute);

const CONNECTION_URL = 'mongodb+srv://quotes:quotes123@cluster0.mpctl.mongodb.net/quotesapi?retryWrites=true;';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((e) => {
        console.log(e.message);
    });

mongoose.set('useFindAndModify', false);