const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +'/date.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


var item=["Apple","Bread","Cup"];
var workList= [];

app.get("/", function (req, res)
 {
  var day = date();
  res.render("list", { listTitle: day,newItemsList:item });
 
});

app.post("/", function (req, res) 
{

  if(req.body.list === 'Work Title')
  {
    workList.push(req.body.newItem);
    res.redirect("/work");
  }
  else
  {
    item.push(req.body.newItem);
  res.redirect('/');
}

});
   


app.get('/work',function(req, res)
{
  
  res.render('list',{listTitle:"Work Title", newItemsList:workList});
});

// app.post('/', function(req, res)
// {
 
//   workList.push(req.body.newItem);
//   res.redirect('/work');
// });

app.listen(3000, function () 
{
  console.log("3000 running");
});
