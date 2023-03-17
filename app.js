//jshint esverion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// ejs alwas has to come after initialized app
app.set('view engine', 'ejs');

app.get("/", function(req, res){

  const today = new Date ();
  const currentDay = today.getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = weekday[currentDay];

    res.render("list", {kindOfDay: day});

  });


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
