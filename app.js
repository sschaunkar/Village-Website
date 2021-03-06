const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.render("home")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server Started on Port 3000")
})