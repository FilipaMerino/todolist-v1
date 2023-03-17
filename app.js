//jshint esverion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();




app.get("/", function(req,res){
  res.send("<h1>YOUR'RE IN!</h1>");
});




app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
