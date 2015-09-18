var body = require('./body/body.js').body,
	head = require('./head/head.js').head;
var zmz = {
	run:function(){
		return body.run();
	},
	sleep:function(){
		return body.digist();
	},
	coding:function(){
		return body.arm();
	},
	eat:function(){
		return head.eat()
	},
	head:head
}
exports.me = zmz;