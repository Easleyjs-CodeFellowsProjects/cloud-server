'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({ message: "App is working"});
})


app.listen(PORT, () => {
    console.log('Server started');
});