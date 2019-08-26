var redis = require("redis");
var client = redis.createClient();
var redis= {};


//self invoking
(function () {
    client.set("key1","vizag");
	client.set("key2","ammerica");
	client.set("key3","i am rahul");
	client.set("key4","final function");
	client.set("key5","length checking");
	client.mset("key6","msetkey1","key7","msetkey2","key8","msetkey3");
	client.set("key9",10);
	client.lpush("lpush","one","two","three","four")
}());


//.1
redis.redisget1 = function(callback){
client.get("key1",function(err,res){
callback(res);
 });
};

//.2
redis.redisget2 = function(callback){
client.del("key2",function(err,res){
callback(res)
 });
};

//.3
redis.redisget3 = function(callback){
client.exists("key3",function(err,res){
callback(res)
});
};


//.4
redis.redisget4 = function(callback){
client.mget("key1","key2","key3","key4",function(err,res){
response=res.toString()
callback(response)
});
};


//.5
redis.redisget5 = function(callback){
client.strlen("key5",function(err,res){
callback(res)
 });
};


//.6
redis.redisget6 = function(callback){
client.mget("key6","key7",function(err,res){
response = res.toString()
callback(response)
 });
};

//.7
redis.redisget8 = function(callback){
client.incr("key9",function(err,res){
callback(res)
 });
};

//.8
redis.redisget9 = function(callback){
client.lpop("lpush",function(err,res){
callback(res)
 });
}


module.exports = {redis}






