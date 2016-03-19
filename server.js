var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser')	
var app = express();

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

/*
* Configure MySQL parameters.
*/
var connection = mysql.createConnection({
host : "localhost",
user : "root",
password : "",
database : "dbname"
});

/*Connecting to Database*/

connection.connect(function(error){
if(error)
{
console.log("Problem with MySQL"+error);
}
else
{
console.log("Connected with Database");
}
});

/*Start the Server*/
var port = 8084;
app.listen(port,function(){
console.log("It's Started on PORT "+port);
});

app.get('/',function(req,res){

res.sendfile('index.html');
});


/*
* Here we will call Database.
* Fetch news from table.
* Return it in JSON.
*/
app.post('/load',function(req,res){
var id = req.body.id; // get body parser based. need to add header in postman Content-Type: application/json
var where = "SELECT * from user_profile WHERE id IN (?)";
if(req.body.id =='' || req.body.id == undefined){
where = "SELECT * from user_profile";
}
console.log(req.body.id);
console.log(where);
 //var id = req.query.id; //get query based
//connection.query("SELECT * from user_profile WHERE id IN (?)", id,function(err,rows){
connection.query(where,id,function(err,rows){
if(err)
{
console.log("Problem with MySQL"+err);
}
else
{
res.end(JSON.stringify(rows));
}
});

});

