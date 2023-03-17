//jshint esverion: 6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);

const app = express();

let items = []; // this is necessary in order to be able to use a variable from a post request to a get request.
let workItems = [];
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// ejs alwas has to come after initialized app

app.get("/", function(req, res){

  let day = date();

  res.render("list", {listTitle: day, newListItems: items});

});


app.post("/", function(req, res){

  let item = req.body.newItem;
  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");

  } else {
    items.push(item);
    res.redirect("/"); //When a post request is triggered in our home route, we'll save the value of new item inside that text box;
    // store it in a variable called item, and redirect to the home route which then
  }
});

app.get("/work", function(req, res){

  res.render("list", {listTitle: "Work List", newListItems: workItems});

});


app.post("/work", function(req, res){


  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.get("/about", function(req, res) {

  res.render("about");

});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
