//jshint esverion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// ejs alwas has to come after initialized app
app.use("view engine", "ejs");





app.get("/", function(req,res){

  res.render("index");

  var today = new Date ();
  var currentDay = today.getDay();
  var numberOfDays = 6 - today.getDay();





  if(currentDay === 6 || currentDay === 6){
    res.send("<h1>YAY! It's the weekend!</h1>");
  } else {
    if(numberOfDays === 1){
      res.sendFile(__dirname + "/index.html")
    } else{
    // res.send("<h1>Boo I have to work!</h1>" + "<p>There's " + numberOfDays + " days for the weekend </p>");
      res.sendFile(__dirname + "/index.html")
    }
  }



});







app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
