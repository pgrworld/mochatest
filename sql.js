  var mysql = require('mysql');
 var sql={};
 var conc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "MOCHATEST"
});
 var obj={}
 var response=""



//.1
sql.function1 = function(callback){
conc.query('select name,empID from mochaTABLE1 WHERE name=?', ["swaroop"],function(err,res){
	callback(res)
 });
  return callback()
};

//.2
sql.function2 = function(data1){
conc.query('delete name from mochaTABLE1 where name=?',[data1],function(err,res){
obj.sqlf2 = function(){
response=JSON.stringify(res)
return response    
  };	
 });
};

//.3
sql.function3 = function(){
conc.query('update mochaTABLE1 set name="securifi" where name=?',["ravi"],function(err,res){
obj.sqlf3= function(){
response=JSON.stringify(res)
return response    
 };	
});
};

//.4
sql.function4 = function(data1,data2){
var sql1 = "insert into mochaTABLE1 (name,empID) values ('"+data1+"','"+data2+"')";
conc.query(sql1,function(err,res){
obj.sqlf4 = function(){
response=JSON.stringify(res)
return response 
  };	
 });
};

module.exports = {obj,sql}




