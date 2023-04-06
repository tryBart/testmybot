const app = require('express')();

app.get('/', (req, res) => res.send('Server is up.'));

module.exports = () => {
  app.listen(3000);
}


const express = require('express');
const server = express();

server.all(`/`, (req, res) => {
    res.send(`Result: [OK].`);
});

function keepAlive() {
    server.listen(3000, () => {
        console.log(`Server is now ready! | ` + Date.now());
    });
}

module.exports = keepAlive;