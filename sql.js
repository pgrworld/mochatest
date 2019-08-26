   var mysql = require('mysql');
 var sql={};
 var conc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "MOCHATEST"
});

//.1
sql.function1 = function(callback){
conc.query('select name,empID from mochaTABLE1 WHERE name=?', ["swaroop"],function(err,res){
callback(res)
 });
};

//.2
sql.function2 = function(callback){
conc.query('delete name from mochaTABLE1 where name=?',["rahul"],function(err,res){   
callback(res)	
 });
};

//.3
sql.function3 = function(callback){
conc.query('update mochaTABLE1 set name="securifi" where name=?',["ravi"],function(err,res){
callback(res)
 });
};

//.4
sql.function4 = function(data1,data2,callback){
var sql1 = "insert into mochaTABLE1 (name,empID) values ('"+data1+"','"+data2+"')";
conc.query(sql1,function(err,res){
callback(res)	
 });
};

module.exports = {sql}





