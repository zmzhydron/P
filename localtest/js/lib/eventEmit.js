define(function(require,exports){
	function alias(name){
		return function(){
			return this[name].call(this,arguments);
		}
	}
	function EventEmitter(){};
	var events = {}
	var protos = EventEmitter.prototype;

	protos.getEvent = function(evt){
		if(!evt) return events;
		if(!events[evt]){
			events[evt] = [];
		}
		return events[evt];
	}

	protos.getFnIndex = function(evt,fn){
		var events = this.getEvent(evt);
		var name = fn.name;
		for(var s = 0,len = events.length;s<len;s++){
			if(name === events[s].fn.name){
				return s;
			}
		}
		return -1;
	}
	protos.add = function(evt,fn){
		var events = this.getEvent(evt);
		var isWrappedFn = typeof fn === 'object';
		events.push(isWrappedFn ? fn : {
			fn:fn,
			isOnce:false
		})
	};
	protos.remove = function(evt,fn){
		if(!evt){
			this.removeAll();
		}
		if(!evt && !fn) return;
		var index = this.getFnIndex(evt,fn);
		if(index >= 0){
			this.getEvent(evt).splice(index,1);
		}

	}
	protos.removeAll = function(){
		var events = this.getEvent();
		var i;
		var len = events.length;
		for(var i in events){
			if(events.hasOwnProperty(i)){
				delete events[i];
			}
		}
	}
	protos.addOnce = function(evt,fn){
		this.add(evt,{
			fn:fn,
			isOnce:true
		})
	}
	protos.emitevent = function(evt){
		var events = this.getEvent();
		for(var s = 0,len = events.length;s<len;s++){
			if(events[s].isOnce){
				events[s].splice(i,1)[0].fn();
			}
			events[s].fn();
		}
	}
	protos.trigger = alias('emitevent');
	protos.on = alias('add');
	protos.once = alias('addOnce');

	return new EventEmitter();
})