const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

var taskName = "";
const tasks = [];

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  // var today = new Date();
  // var options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long"
  // };
  //
  // var day = today.toLocaleDateString("en-US", options);
  let day = date.getDate();

  res.render("list", {
    kindOfDay: day,
    tasks: tasks
  });

});

//For about page
app.get("/about", function(req, res) {

  res.render("about");
});

app.post("/", function(req, res) {

  taskName = req.body.taskName;
  tasks.push(taskName);
  res.redirect("/");
  //console.log(tasks)

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
