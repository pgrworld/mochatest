var assert = require('assert');
var imp = require("./app.js")

describe("imp add",function(){
	 it("returns 4+5=9",function(){
	 	assert.equal(imp.add(4,5), 9);
	 });


	it("return 4-5=-1",function(){
		assert.equal(imp.sub(4,5),-1);
	});

    
    it("return 4*5=20",function(){
    	assert.equal(imp.mul(4,5),20);
    });
});


describe("self test",function(){
  it("array.indexOf",function(){
  	assert.equal([1,2,3,4].indexOf(3),2)
  })
});
