function Promise(fn){
	var status = 0,pendings = [],value;
	this.then = function(onSuccess){
		return new Promise(function(resolve){
			handle({
				resolve:resolve,
				success:onSuccess
			})
		});
	}
	function handle(pending){
		console.log(pending);
		if(status !== 1){
			pendings.push(pending);

			return;
		}
		var ret = pending.success(value);
		// console.log(ret);
		pending.resolve(ret);
		
	}
	function resolve(val){
		console.log(val,1111111111);
		if(status === 0){
			status = 1;	
			
			if(val && typeof val.then === 'function'){
				var then = val.then;
				then.call(val,resolve);
				return;
			}
			value = val;
			handle(pendings[0]);
		}
	}
	fn(resolve);
}

function test(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve('zhangmingzhi');
		},1000);
	});
}
test().then(function(val){
	// return new Promise(function(resolve){
	// 	setTimeout(function(){
	// 		console.log("stage two of many @ "+ val);
	// 		resolve(val + "11111111111");
	// 	},1000)
	// });
	console.log(val);
	return 'zmz';
})
.then(function(val){
	alert(val);
	// return new Promise(function(resolve){
		
	// })
	return "3"
})
.then(function(val){
	alert(val);
})