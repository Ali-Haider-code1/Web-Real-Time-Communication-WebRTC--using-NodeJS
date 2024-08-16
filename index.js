const express = require('express');
const http = require('http');
const socket = require('socket.io');
const app = express();
const PORT = 3000;
const server = http.createServer(app);

app.use(express.static('public'))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('This will be a Chat app')

})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})