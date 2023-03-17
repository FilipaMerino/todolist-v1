//jshint esverion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// ejs alwas has to come after initialized app
app.set('view engine', 'ejs');





app.get("/", function(req, res){



  var today = new Date ();
  var currentDay = today.getDay();
  var day = "";

  if(currentDay === 0 || currentDay === 6){
      day = "Weekend";
    } else {
      day = "Weekday";
    }

    res.render("list", {kindOfDay: day});

  });





app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
