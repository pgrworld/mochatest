var redis = require("redis");
var client = redis.createClient();
var mocha = require("./mochatest.js")

client.on("connec", function(){
	console.log("connected")
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

 

// client.get("key",function(err,reply){
// 	//console.log(reply)
// })

// //.1
// client.set("key","securifi")
// client.get("key",function(err,res){
// 	console.log(res)
// })
// //.2
// client.del("key",function(err,res){
// 	console.log(res)
// });
// //.3
// client.exists("key",function(err,res){
// 	console.log(res)
// })
// //.4
// client.pexpire("key","2000",function(err,res){
// 	console.log(res)
// })

// client.set("key1","embedded")
// client.keys("key*",function(err,res){
// 	console.log(res)
// })


// client.move("key",2,function(err,res){
// 	console.log(res)
// })


// client.set("key2","hello india")
// client.get("key2",function(err,res){
// 	console.log(res)
// })


// exports.fun2 = function(returning){
// client.get("key",function(err,res){
// 	returning(res);
//  })
// }

//**********************************Redis functions******************************************

client.set("key","securifi", redis.print);
client.set("key","securifi embedded systems");
client.set("key1","i love my india");

exports.fun3 = function(){
	client.get("key",function(err,res){
		exports.output=res
		mocha.myfun4()
	})
};

exports.fun5 = function(){
	client.get("key1",function(err,res){
		exports.output1=res
		mocha.myfun6()
	})
};

//.1
client.set("key2","hyderabad");

client.get("key2",function(err,res){
 result = res
 mocha.mochafun(result)
})


obj.redisfun2=function(result){
   console.log(result)
   return result
}

module.exports = {obj}
