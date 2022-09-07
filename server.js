const express = require('express');
const app = express();
const port =  3088;
const io = require('socket.io')(5500);
const { connection } = require('/func');
const Redis = require('ioredis');
const redis = new Redis();
const server = app.listen(port);


app.get('/', (req, res ) => {
    res.send('Hello Word');
})

io.on('connection', connection);