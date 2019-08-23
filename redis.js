var redis = require("redis");
var client = redis.createClient();
var obj = {};
var redis= {};

//self invoking
(function () {
    client.set("key1","vizag");
	client.set("key2","ammerica");
	client.set("key3","i am rahul");
	client.set("key4","final function");
	client.set("key5","length checking");
	client.mset("key6","msetkey1","key7","msetkey2","key8","msetkey3")
}());


//.1
redis.redisget1 = function(){
client.get("key1",function(err,res){
obj.redisf1 = function(){
return res;
  };
 });
};


//.2
redis.redisget2 = function(){
client.del("key2",function(err,res){
obj.redisf2 = function(){
return res;
 };
});
};


//.3
redis.redisget3 = function(){
client.exists("key3",function(err,res){
obj.redisf3 = function(){
return res;
 };
});
};


//.4
redis.redisget4 = function(){
client.mget("key1","key2","key3","key4",function(err,res){
obj.redisf4 = function(){
response=res.toString()
console.log(response)
return response;
 };
});
};


//.5
redis.redisget5 = function(){
client.strlen("key5",function(err,res){
obj.redisf5 = function(){
return res
  };
 });
};


//.6
redis.redisget6 = function(){
client.mget("key6","key7",function(err,res){
obj.redisf6 = function(){
response = res.toString()
return response;
  }
 });
};


module.exports = {obj,redis}





