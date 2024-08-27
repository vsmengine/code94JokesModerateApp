const express = require('express');
const cors = require('cors');
const setupProxy = require('./setupProxy');

const app = express();
const version = '1.0';
const port = 4300;

// Configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

setupProxy(app);

// Listen
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
