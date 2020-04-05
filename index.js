const express = require("express");
const app = express();
app.set("view engine", "ejs");
//app.engine('html', require("ejs").renderFile);
app.use(express.static("public")); //flder for css, js, images

const request = require("request");

const dilbert = require('dilbert');

var globalImage = "";

app.get("/", function(req, res){
    dilbert.getToday((image) => {
        let dilbertImage = image;
        globalImage = dilbertImage;
    });
    console.log(globalImage);
    res.render("index",{"image":globalImage});
})

app.get("/history", function(req, res){
    res.render("history");
})

app.get("/anti", function(req, res){
    res.render("anti");
})

app.get("/types", function(req, res){
    res.render("types");
})


app.listen(process.env.PORT, function(){
    console.log("Express server is running...");
})  