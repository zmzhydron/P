function Promise(fn){
	var status = 'unfinish';
	var thenArray = [];
	var value = void 0;
	this.then = function(onSuccess,onReject){
		if(status !== 'unfinish'){
			onSuccess(value);
			return;
		}
		thenArray.push(onSuccess);
	}
	function resolve(val){
		setTimeout(function(){
			status = 'finish';
			value = val;
			for(var s = 0,len = thenArray.length;s<len;s++){
				thenArray[s](val);
			}
		},0);

	}
	fn(resolve);
}
function Test(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve('zhangmingzhi')
		},2000);
	})
}
Test().then(function(val){
	console.log('hi'+val);
}).then(function(){

});
