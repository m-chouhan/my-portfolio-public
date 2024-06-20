const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello After CI/CD correctly setup!');
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}/`);
});
