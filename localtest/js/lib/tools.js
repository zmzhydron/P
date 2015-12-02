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
		},
		extend:function(subClass,superClass){
			function F(){}
			F.prototype = superClass.prototype;
			subClass.prototype = new F();
			subClass.prototype.constructor = subClass;
			subClass.super = superClass.prototype;
			//对应与多次继承下，superclass的constructor都已经被改变了,已经不指向superClass，而是指向Object.prototype.constructor
			//这时需要重新指向其构造函数
			if(superClass.prototype.constructor === Object.prototype.constructor){
				superClass.prototype.constructor = superClass;
			}
			var instance = new subClass();
			superClass.call(instance);
			return instance;
		},
		hybrid:function(obj){	
			function F(){};
			F.prototype = obj;
			return new F();
		}
	}
	return OOP;
})
