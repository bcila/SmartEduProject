const express = require('express');
const ejs = require('ejs')
const app = express();

app.set("view engine", "ejs")

// Middleware
app.use(express.static("public"))

// Routes
app.get('/', (req, res) => {
    res.status(200).render('index',{
        page_name: "index"
    });
});
app.get('/about', (req, res) => {
    res.status(200).render('about',{
        page_name: "about"
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App started port: ${PORT}`);
});
