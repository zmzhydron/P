define(['eventEmit','tools'],function(eventEmit,tool){
	function start(){

	}
	function Person(){
		this.name = 'zhangmingzhi';
	}
	var me = new Person();
	tool.mix(me,eventEmit);
	console.log(me);
	me.on('eat',function(food){
		console.log(this.name+" is eating!!"+food);
	});
	me.on('fuck',function(girl){
		console.log(this.name+" is fucking: "+girl);
	});
	me.on('run',function(legs){
		console.log(this.name+" is running @ "+legs);
	});
	me.once('die',function(){
		console.log(this.name+" is dead ,he or she can'\ live agagin!!");
	})
	me.trigger('eat','pussy');
	me.trigger('die');
	me.trigger('die');
	me.trigger('fuck','blonde');
	me.trigger('run','4legs');

	eventEmit.on('loaded',function(){
		console.log(this);
	})
	eventEmit.trigger('loaded');
	return {
		start:start
	};
})