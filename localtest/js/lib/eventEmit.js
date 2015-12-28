define(function(require,exports){
	function alias(name){
		return function(){
			return this[name].apply(this,arguments);
		}
	}

	function EventEmitter(){};
	var eventObj = {}
	var protos = EventEmitter.prototype;

	protos.getEvent = function(evt){
		if(!evt) return eventObj || {};
		if(!eventObj[evt]){
			eventObj[evt] = [];
		}
		return eventObj[evt];
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
		var events = this.getEvent(evt);
		var arguments = Array.prototype.slice.call(arguments,1);
		for(var s = 0;s<events.length;s++){
			if(events[s].isOnce){
				console.log('trigger once event:'+evt);
				var o = events.splice(s,1);
				o[0].fn.apply(this,arguments);
				if(--s < 0){
					break;
				}
			}
			events[s].fn.apply(this,arguments);
		}
	}
	protos.trigger = alias('emitevent');
	protos.on = alias('add');
	protos.once = alias('addOnce');
	var count = 0;
	var init = function(){
		console.log(count);
		count++;
		return new EventEmitter();
	}
	return init();
})