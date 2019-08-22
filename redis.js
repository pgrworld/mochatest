var redis = require("redis");
var client = redis.createClient();
var obj = {};
var response="value will be updated";

client.on("connec", function(){
	console.log("connected")
});
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});


//.1
client.set("key1","vizag");

client.get("key1",function(err,res){
obj.redisf1 = function(){
response=res
return response;
 }
})



//.2
client.set("key2","ammerica");

client.get("key2",function(err,res){
obj.redisf2 = function(){
response=res;
return response;
 };
});



//.3
client.set("key3","i am rahul");

client.get("key3",function(err,res){
obj.redisf3 = function(){
response=res;
return response;
 };
});



//.4
client.set("key4","final function");

client.get("key4",function(err,res){
obj.redisf4 = function(){
response=res;
return response;
 };
});



module.exports = {obj}
