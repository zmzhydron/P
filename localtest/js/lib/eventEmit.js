+function(window){
	var events = {}
	window.EventEmit = {
		reg:function(action,callback){
			if(action && typeof callback === 'function'){
				if(events[action]){
					events[action].push({
						fn:callback
					});
				}else{
					events[action] = [];
					events[action].push({
						fn:callback
					})
				}
			}
			console.log(events);
		},
		remove:function(action){
			if(action){
				events[action] = [];
			}
		},
		emit:function(action,arg){
			if(action){
				var actions = events[action];
				console.log(actions,actions.length);
				if(actions && actions.length){
					for(var s = 0,len = actions.length;s<len;s++){
						actions[s].fn();
					}
				}
			}
		}
	}
}(window);