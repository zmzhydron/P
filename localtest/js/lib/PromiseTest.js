function Promise(fn){

	var status = 0;
	var thenArray = [];
	var cb;
	var value = void 0;

	function handle(obj){
		var ret;
		
		if(status === 1){
			if(typeof cb === 'function'){
				ret = obj.cb(value);
				console.log(ret);
				obj.resolve(ret);
			}
		}else{
			thenArray.push(obj);
		}
	}
	this.then = function(onSuccess,onReject){
		cb = onSuccess;
		return new Promise(function(resolve){
			handle({
				cb:onSuccess,
				resolve:resolve
			})
		})
	}
	function resolve(val){
		console.log('resolve');
		if(val === undefined) return;
		if(status === 0){
			status = 1;
			value = val;
			console.log(thenArray);
			for(var s = 0,len = thenArray.length;s<len;s++){
				var ret = thenArray[s].cb(val);
				if(thenArray[s].resolve && ret !== undefined){
					thenArray[s].resolve(ret);
				}
			}
			status = 0;
		}
	}

	if(typeof fn === 'function'){
		fn(resolve)
	}else{
		resolve(fn);
	}
	
}
function Test(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve('zhangmingzhi')
		},2000);
	})
}
Test().then(function(val){
	console.log('hi~~'+val);
	return 'zhangmingzhi';
}).then(function(asd){
	console.log('second is ' + asd);
	return 'zmz';
}).then(function(val){
	setTimeout(function(){
		console.log('fuck you ~~'+val);
		return 'siwa';
	},1000);
}).then(function(val){
	console.log('this is a delay then callback: '+val);
})
