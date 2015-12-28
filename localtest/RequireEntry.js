requirejs.config({
	baseUrl:'../js/lib',
	paths:{
		jquery:'jquery',
		tools:'tools'
		// react:'../server-side/node_modules/react'
	}
})
setTimeout(function(){
	require(['../../server-side/node_modules/react/react.js'],function(o){
		console.log(o);
	});
},3000);
Object.prototype.addMethod = function(prop,fn){
	this.prototype[prop] = fn;
}
requirejs(['tools'],function(tools){
	console.log(tools.say());
	$("#me").click(function(){
		alert(1);
	})
});
require(['OOP'],function(oop){
	console.log(oop.say());
});
require(['emitterTest'],function(emit){
	emit.start();
})