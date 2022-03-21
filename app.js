const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("homepage");
})

app.get("/menu", (req, res) => {
    res.render("menu");
})

app.get("/shop", (req, res) => {
    res.render("shop");
})

app.get("/shop-item", (req, res) => {
    res.render("shop-item");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/location", (req, res) => {
    res.render("location");
})

const PORT = 3000;

app.listen(PORT, () => console.log(`server should be running at http://localhost:${PORT}/`));