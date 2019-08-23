var assert = require('assert');
var rahul = require('chai').expect;
var app = require("./app.js")
var redis = require("./redis.js");
var sql =require("./sql.js");


//.1
describe("imp add",function(){
	 it("returns 4+5=9",function(done){
	 	assert.equal(app.add(4,5), 9);
	 	done() 
	 });

//.2
	it("return 4-5=-1",function(done){
		assert.equal(app.sub(4,5),-1);
		done()
	});

 //.3  
    it("return 4*5=20",function(done){
    	assert.equal(app.mul(4,5),20);
    	done()
    });
});


//.4
describe("self test",function(){
  it("array.indexOf",function(done){
  	assert.equal([1,2,3,4].indexOf(3),2)
  	done()
  })
});


//.5
describe("imp div", function(){
  it("retrun 4/2=2",function(done){
  	assert.equal(app.div(4,2),2)
  	done()
  });
});


//.6
describe("imf fun1",function(){
	it("return arg1+arg2",function(done){
		assert.equal(app.fun1("gowrav","rahul"),"gowravrahul")
		done()
	})
})


//.7
describe("imp fun2", function(){
	it("return", function(done){
		assert.equal(app.fun2(1,2,3,4,5,6,7,8),84)
		done()
	})
})


//.8
function pow(x,y){
	return x**y

}

describe("pow",function(){
	it("pow",function(done){
		assert.equal(pow(2,3),8);
		assert.equal(pow(3,4),81)
		done()
	});

});


//.9
describe("hooks",function(){
before(function(){
		console.log("before starting a test cases one before")
	});

after(function(){
	console.log("ending it will be printed four after")
});

beforeEach(function(){
	console.log("before starting a test case second beforeEach")
});

afterEach(function(){
	console.log("after the test casll third afterEach")
});
 
  it("array",function(done){
 	assert.equal([1,2,3,4,5,6].indexOf(2),1)
 	done()
  });

  it("pow",function(done){
  	assert.equal(pow(5,6),15625)
  	done()
  })

});


//.10 //inclusive test 
describe('Array', function() {   //describe.skip
    // pending test below
    specify('should return -1 when the value is not present');
});

//Exclusive Tests(it will excute only function or one test case )

context("exclusivity testcase",function(){   //describe.only
	specify("concat two strings",function(){
		assert.equal("gowrav"+"rahul","gowravrahul")
	})
})


//.11
describe("without return function",function(){
    it("testing",function(done){
    	var res = 3+5*2
    	var conc = "gowrav"+"securifi"
    	rahul(res).to.not.equal(12)
        assert.equal(conc,"gowravsecurifi")
        done()
    })
});

//.12
describe("incremented fun",function(){
	it("value is incer",function(done){
		assert.equal(app.obj.fun1(),101)
		done()
	})
})


//*********************************redis-test-cases*******************************************
//.1
describe("redis testing 1",function(){
	redis.redis.redisget1()
	it("redis testing",function(done){
	assert.equal(redis.obj.redisf1(),"vizag")
	done()
	});
});


//.2
describe("redis testing 2",function(){
	redis.redis.redisget2()
	it("redis testing",function(done){
	assert.equal(redis.obj.redisf2(),1)
	done()
	});
});


//.3
describe("redis testing 3",function(){
	redis.redis.redisget3()
	it("redis testing",function(done){
	assert.equal(redis.obj.redisf3(),1)
	done()
	});
});


//.4
describe("redis testing 4",function(){
	redis.redis.redisget4()
	it("redis testing",function(done){
	assert.equal(redis.obj.redisf4(), [ 'vizag', null, 'i am rahul', 'final function' ])
	done()
	});
});


//.5
describe("redis testing 5",function(){
	redis.redis.redisget5()
	it("redis testing",function(done){
    assert.equal(redis.obj.redisf5(), 15 )
    done()
	})
});


//.6
describe("redis testing 6",function(){
	redis.redis.redisget6()
	it("redis testing",function(done){
    assert.equal(redis.obj.redisf6(),[ 'msetkey1', 'msetkey2' ])
    done()
	})
});

//****************************sql-test-cases********************************************************


//.1
describe("sql testing 1",function(){
	 sql.sql.function1()
	it("sql testing",function(done){
	assert.equal(sql.obj.sqlf1(), '[{"name":"swaroop","empID":"s0154"}]')
	done()
	});
});


//.2
describe("sql testing 2",function(){
	sql.sql.function2("rahul")
	it("sql testing",function(done){
	assert.equal(sql.obj.sqlf2(),)
	done()
	});
})

//.3
describe("sql testing 3",function(){
	sql.sql.function3()
	this.timeout(9000)
	it("sql testing",function(done){
	assert.equal(sql.obj.sqlf3(), '{"fieldCount":0,"affectedRows":0,"insertId":0,"serverStatus":34,"warningCount":0,"message":"(Rows matched: 0  Changed: 0  Warnings: 0","protocol41":true,"changedRows":0}')
	setTimeout(done,2000)
	});
})

//.4
describe("sql testing 4",function(){
	sql.sql.function4("hello","1234")
	this.timeout(5000)
	it("sql testing",function(done){
	assert.equal(sql.obj.sqlf4(),'{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}')
	setTimeout(done,1000)
	});
})


