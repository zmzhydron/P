var zmz = require('me').me,
	tools = require('tool').tool;

function start(res){
	console.log('starting~~');
	for(var s in zmz){
		if(tools.isFunction(zmz[s]) && zmz.hasOwnProperty(s)){
			console.log(zmz[s]());
		}
	};
}
module.exports = {
	start:start,
	eat:function(rep){
		// zmz.head.eat();
		var str = "";
		for(var s in module){
			str = str + s.toString() + "\n";
		}
		rep.wirte(str);
	}
}