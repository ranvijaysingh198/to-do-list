const express = require("express");
// const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.use(express.urlencoded({extended : true}));
// line 8 will check for every non static files under public folder and use them
app.use(express.static("public")); 

app.set('view engine' , 'ejs'); 

app.get("/", function(req,res){

    // let day = date(); jb sirf 1 hi function ho tbhi use karna hai
    let day = date.getDate();
    // let day = date.getDay(); agar dusra wala function use karna ho tb simply usko call kr lo 
    
    res.render("list", {listTitle: day, newItemLists: items});
});

app.post("/",(req,res)=>{
    let  item = req.body.newItem;
    // console.log(req.body);
    if(req.body.list == "work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
   
    
});
app.get("/work",(req,res)=>{
    res.render("list", {listTitle: "work list", newItemLists:workItems });
});

app.post("/work",(req,res)=>{
    
    let item = req.body.newItem;
    
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about",(req,res)=>{
    res.render("about")
});


app.listen(3000,function(){
    console.log("Server running on port 3000");
});