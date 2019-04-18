const express = require('express');
const path = require("path");


const port = process.env.PORT || 3000;

const app = express();
app.set("view engine" , "ejs")

app.use("/public", express.static(path.join(__dirname,"public")));

app.get('/', (req,res) => {
    res.render("index")
});

app.listen(3000 ,() => {
    console.log("The server is up and running")
})

