require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

server.use('*', (req, res) => {
    res.send('<h1>Success!</h1>');
});

server.use((err, req, res, next) => { // eslint-disable-line
    console.log(err);
    res.status(500).json({
        message: 'Something went wrong'
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
});