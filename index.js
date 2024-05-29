const express = require('express');
const axios = require('axios');
const PORT = 3000;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const startServer = async () => {
    const res = await axios.get('https://www.linkedin.com/jobs/collections/');
    console.log(res);
    app.listen(PORT,() => {
        console.log(`SERVER STARTED IN PORT: ${PORT}`);
    })
}

startServer();