function add(x,y){
	return x+y
}


function sub(x,y){
	return x-y
}

function mul(x,y){
	return x*y
}

function div(x,y){
	return x/y
}


function fun1(arg1,arg2){
  return arg1+arg2
}


function fun2(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
	return arg1+arg3+arg4+arg2*arg7+arg3/arg3*arg6+arg7*arg8
}




var value = 100;
var obj = {};

obj.fun1 = function(){

	var text = obj.fun2(20)
	if(text){
     value++  
	}
   return value
} 

obj.fun2 = function(arg1){
	return arg1
}



module.exports = {add,sub,mul,div,fun1,fun2,obj}
