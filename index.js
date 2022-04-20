const express = require('express');
const connectToDatabase = require('./src/database/database');
const route = require('./src/routes/characters.routes');
const app = express();
const port = 5000;

app.use(express.json());



app.listen(port, () => console.log(`App running on port ${port}!`));
