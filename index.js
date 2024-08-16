const express = require('express');
const http = require('http');
const socket = require('socket.io');
const app = express();
const PORT = 3000;
const server = http.createServer(app);
const { v4: uuidv4 } = require('uuid')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);

})
app.get('/:room', (req, res) => {
    res.render("room", { roomId: req.params.room })
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})