const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('index');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App started port: ${PORT}`);
});
