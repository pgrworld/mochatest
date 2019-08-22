 var mysql = require('mysql');
 var conc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "MOCHATEST"
});
 var obj={}
 var response="value will be updated soon"

//.1
conc.query('select name,empID from mochaTABLE1 WHERE name=?', ["swaroop"],function(err,res){
obj.sqlf1 = function(){
response=JSON.stringify(res)
return response    
 };
});

//.2
conc.query('select name,empID from mochaTABLE1 where name=?',["rahul"],function(err,res){
obj.sqlf2 = function(){
response=JSON.stringify(res)
return response    
 };	
});

//.3
conc.query('select name,empID from mochaTABLE1 where name=?',["murali"],function(err,res){
obj.sqlf3 = function(){
response=JSON.stringify(res)
return response    
 };	
});


//.4
conc.query('select name,empID from mochaTABLE1 where name=?',["ravi"],function(err,res){
obj.sqlf4= function(){
response=JSON.stringify(res)
return response    
 };	
});


module.exports = {obj}






