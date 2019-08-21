var assert = require('assert');
var rahul = require('chai').expect;
var app = require("./app.js")
var redis = require("./redis.js");
var sql =require("./sql.js");


//.1
describe("imp add",function(){
	 it("returns 4+5=9",function(){
	 	assert.equal(app.add(4,5), 9); 
	 });

//.2
	it("return 4-5=-1",function(){
		assert.equal(app.sub(4,5),-1);
	});

 //.3  
    it("return 4*5=20",function(){
    	assert.equal(app.mul(4,5),20);
    });
});


//.4
describe("self test",function(){
  it("array.indexOf",function(){
  	assert.equal([1,2,3,4].indexOf(3),2)
  })
});


//.5
describe("imp div", function(){
  it("retrun 4/2=2",function(){
  	assert.equal(app.div(4,2),2)
  });
});


//.6
describe("imf fun1",function(){
	it("return arg1+arg2",function(){
		assert.equal(app.fun1("gowrav","rahul"),"gowravrahul")
	})
})


//.7
describe("imp fun2", function(){
	it("return", function(){
		assert.equal(app.fun2(1,2,3,4,5,6,7,8),84)
	})
})


//.8
function pow(x,y){
	return x**y

}

describe("pow",function(){
	it("pow",function(){
		assert.equal(pow(2,3),8);
		assert.equal(pow(3,4),81)
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
 
  it("array",function(){
 	assert.equal([1,2,3,4,5,6].indexOf(2),1)
  });

  it("pow",function(){
  	assert.equal(pow(5,6),15625)
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
    it("testing",function(){
    	var res = 3+5*2
    	var conc = "gowrav"+"securifi"
    	rahul(res).to.not.equal(12)
        assert.equal(conc,"gowravsecurifi")
    })
});

//.12
describe("incremented fun",function(){
	it("value is incer",function(){
		assert.equal(app.obj.fun1(),101)
	})
})


//*********************************redis-test-cases*******************************************
//.1
describe("redis testing 1",function(){
	it("redis testing",function(){
	assert.equal(redis.obj.redisf1(),"vizag")
	});
});


//.2
describe("redis testing 2",function(){
	it("redis testing",function(){
	assert.equal(redis.obj.redisf2(),"ammerica")
	});
})


//.3
describe("redis testing 3",function(){
	it("redis testing",function(){
	assert.equal(redis.obj.redisf3(),"i am rahul")
	});
})


//.4
describe("redis testing 4",function(){
	it("redis testing",function(){
	assert.equal(redis.obj.redisf4(),"final function")
	});
})



//****************************sql-test-cases********************************************************


//.1
describe("sql testing 1",function(){
	it("sql testing",function(){
	assert.equal(sql.obj.sqlf1(), '[{"name":"swaroop","empID":"s0154"}]')
	});
});


//.2
describe("sql testing 1",function(){
	it("sql testing",function(){
	assert.equal(sql.obj.sqlf2(), '[{"name":"rahul","empID":"s0156"}]')
	});
})

