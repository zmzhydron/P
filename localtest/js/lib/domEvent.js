var addEvent = addEvent || {};
var addType = "addEventListener";
addEvent.add = function(ele,type,fn){
	if(addEvent._index === undefined){
		addEvent._index = 0;
	}else{
		addEvent._index++;
	}
	if(!ele.eventype){
		ele.eventype = {};
	}
	if(!ele.eventype[type]){
		ele.eventype[type] = {}
	}
	fn.index = addEvent._index;
	ele.eventype[type][addEvent._index] = fn;
	var self = this;
	ele.addEventListener(type,this.handleCore,false)
}
addEvent.handleCore = function(event){
	var type = event.type;
	var events = this.eventype[type];
	console.log(events);
	for(var s in events){
		events[s].call(this);
	}
}
addEvent.remove = function(ele,type,fn){
	if(ele.eventype){
		if(ele.eventype[type]){
			delete ele.eventype[type][fn.index];
		}
	}
}