 var mysql = require('mysql');
 var conc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "MOCHATEST"
});
 var obj={}
 var response="value will be updated soon"

conc.query('select name,empID from mochaTABLE1 WHERE name=?', ["swaroop"],function(err,res){
obj.sqlf1 = function(){
response=JSON.stringify(res)
return response    
 };
});


conc.query('select name,empID from mochaTABLE1 where name=?',["rahul"],function(err,res){
obj.sqlf2 = function(){
response=JSON.stringify(res)
return response    
 };	
});


module.exports = {obj}


