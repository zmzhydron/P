define(['jquery'],function($){
	var OOP = {
		isObject:function(){
			return Object.prototype.toString.call(val);
		},
		toArray:function(str){
			return Array.prototype.slice.call(str);
		},
		say:function(){
			console.log($);
			window.$ = $;
			return 'hi there';
		}
	}
	return OOP;
})
