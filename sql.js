  var mysql = require('mysql');
 var sql={};
 var conc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "MOCHATEST"
});
 var obj={}



//.1
sql.function1 = function(){
conc.query('select name,empID from mochaTABLE1 WHERE name=?', ["swaroop"],function(err,res){
obj.sqlf1 = function(){
response=JSON.stringify(res)
return response    
  };
 });
};

//.2
sql.function2 = function(){
conc.query('delete name from mochaTABLE1 where name=?',["rahul"],function(err,res){
obj.sqlf2 = function(){
response=JSON.stringify(res)
return response    
  };	
 });
};

//.3
sql.function3 = function(){
conc.query('select name,empID from mochaTABLE1 where name=?',["gowrav rahul"],function(err,res){
obj.sqlf3 = function(){
response=JSON.stringify(res)
return response    
  };	
 });
};

//.4
sql.function4 = function(){
conc.query('select name,empID from mochaTABLE1 where name=?',["ravi"],function(err,res){
obj.sqlf4= function(){
response=JSON.stringify(res)
return response    
 };	
});
};

module.exports = {obj,sql}

