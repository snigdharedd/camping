var express= require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.set("view engine","ejs");

 var campgrounds=[
        
    {name: "Voila Greek",image:"https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104497f1c07fa7e4b2ba_340.jpg"},
    {name: "Tabola Hill",image:"https://pixabay.com/get/eb33b10b21fc003ed1584d05fb1d4e97e07ee3d21cac104497f1c07fa7e4b2ba_340.jpg"},
    {name: "Mountain Top",image:"https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104497f1c07fa7e4b2ba_340.jpg"}
    
  ];

app.get('/',function(req,res){
  res.render('landing');  
});

app.get('/campgrounds',function(req,res){
   
  res.render('campgrounds',{campgrounds: campgrounds});
});

app.post('/campgrounds',function(req,res){
    var name= req.body.name;
    var image= req.body.image;
    var newCampground = {name:name , image:image} ;
    campgrounds.push(newCampground);
    
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new',function(req,res){
    res.render('new');
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
});