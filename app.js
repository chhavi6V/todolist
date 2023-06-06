const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if(currentDay == 0 || currentDay == 6){
        day = "Weekend";
    }else{
        day = "Weekday";
    }
    res.render("lists", {kindOfDay : day});
})

app.listen(3000, function(){
    console.log("server has started on port 3000"); 
})