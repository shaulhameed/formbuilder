var express = require("express"),
	http = require("http");

var app = express();


app.get('/', function(req, res){
    console.log(res);
	res.send("hello");
});

app.listen("4000", function(){
    
});