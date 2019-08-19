 var mysql = require('mysql');
 var conc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "MOCHATEST"
});
 var output;
 var mocha=require("./mochatest.js")

exports.myfun=function(){
	conc.query('select name,empID from mochaTABLE1 WHERE name=?', ["swaroop"],function(err,res){
		exports.output=JSON.stringify(res)
		mocha.myfun2()
		if(err){
			throw err
		}else{
			//console.log(res)
		}
	})	
};


exports.myfun1=function(){
	conc.query('select name,empID from mochaTABLE1 where name=?',["rahul"],function(err,res){
		exports.output1=JSON.stringify(res);
		  mocha.myfun3()
	})
}
