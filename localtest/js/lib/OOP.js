define(['tools'],function(tool){
	var obj = {
		say:function(){
			test();
			// return 'hi,this is oop.js and welcome' + tool.say();
		}
	}
	var res = {
		name:'zhangmingzhi',
		skill:'eat shit sheep'
	}

	function Animal(){
		this.type = 'Animal';
		this.crawls = '4';
		this.eat = function(){
			console.log("i am"+this.name+" and im eat this cold");
		}
	}
	Animal.prototype = {
		run:function(){
			console.log("i am"+this.name+" and im running in 4 legs");
		}
	}

	function Person(){
		this.type = 'person';
		this.code = function(){
			console.log(this.name + "im codeing monthetr fucker");
		}
	}
	Person.prototype= {
		run : function(){
			console.log("i am"+this.name+" and im running in just TWO!!!!! legs");
		},
		age:27,
		wishes:[1,2,3,4]
	}
	
	function test(){
		var me = new Person();
		me.run = function(){
			console.log('this is override run function');
		}
		me.age = 18;
		me.__defineGetter__('age',function(){
			console.log('i m 18 agagin ? i wish');
		})
		console.log(me.age);
		me.run();
		me.wishes = [];
		console.log(me.hasOwnProperty('wishes'));
		me.wishes.push("pussy");
		console.log(me.wishes);

		var zy = tool.hybrid(me);
		zy.name = 'zhoyyan';
		zy.eat = function(){
			console.log('my name is: '+this.name+" and iam eating")
		}

		var kids = tool.hybrid(zy);

		kids.name = 'kids';
		kids.eat();
		kids.run();
	}
	return obj;
});