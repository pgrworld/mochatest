var assert = require('assert');
var imp = require("./app.js");
var rahul = require('chai').expect;

//.1
describe("imp add",function(){
	 it("returns 4+5=9",function(){
	 	assert.equal(imp.add(4,5), 9); 
	 });

//.2
	it("return 4-5=-1",function(){
		assert.equal(imp.sub(4,5),-1);
	});

 //.3  
    it("return 4*5=20",function(){
    	assert.equal(imp.mul(4,5),20);
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
  	assert.equal(imp.div(4,2),2)
  });
});

//.6
describe("imf fun1",function(){
	it("return arg1+arg2",function(){
		assert.equal(imp.fun1("gowrav","rahul"),"gowravrahul")
	})
})

//.7
describe("imp fun2", function(){
	it("return", function(){
		assert.equal(imp.fun2(1,2,3,4,5,6,7,8),84)
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


describe("incremented fun",function(){
	it("value is incer",function(){
		assert.equal(imp.obj.fun1(),101)
	})
})

