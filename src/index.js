const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('hello express');
});

app.listen(3000);