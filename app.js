//jshint esverion: 6
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
var items = []; // this is necessary in order to be able to use a variable from a post request to a get request.

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

  res.render("list", {kindOfDay: day, newListItem: items});

});


app.post("/", function(req, res){

  var item = req.body.newItem;
  items.push(item);

  res.redirect("/"); //When a post request is triggered in our home route, we'll save the value of new item inside that text box;
  // store it in a variable called item, and redirect to the home route which then

});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
