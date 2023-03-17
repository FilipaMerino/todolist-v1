//jshint esverion: 6
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// ejs alwas has to come after initialized app

app.get("/", function(req, res){

  var today = new Date ();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: day});

});


app.post("/", function(req, res){

  var taskList = req.body.newItem;
  console.log(taskList);


});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
