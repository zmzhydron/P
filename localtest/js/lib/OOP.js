define(['tools'],function(tool){
	var obj = {
		say:function(){
			test();
			return 'hi,this is oop.js and welcome' + tool.say();
		}
	}
	var res = {
		name:'zhangmingzhi',
		skill:'eat shit sheep'
	}
	function Person(){
		this.name = 'master';
		this.code = function(){
			console.log(this.name + "im codeing monthetr fucker");
		}
	}
	Person.prototype = {
		gogo:function(){
			console.log("gogo function");
		},
		skill:'frontend devoloper'
	}
	var master = new Person();
	function test(){
		var newme = tool.mix(res,master)
		console.log(newme.name,"name");
		console.log(newme.skill,"skill");
		newme.code()
		newme.gogo();
	}

	return obj;
});