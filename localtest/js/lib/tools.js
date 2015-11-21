define(['jquery'],function($){
	var OOP = {
		isObject:function(){
			return Object.prototype.toString.call(val);
		},
		toArray:function(str){
			return Array.prototype.slice.call(str);
		},
		say:function(){
			window.$ = $;
			return 'hi there';
		},
		mix:function(receive,give,isDeep){
			if(isDeep){

			}else{
				for(var s in give){
					if(give.hasOwnProperty(s)){
						if(!receive[s]){
							
						}
					}
					receive[s] = give[s];
				}
				return receive;
			}
		}
	}
	return OOP;
})
