define(['eventEmit'],function(eventEmit){
	console.log(eventEmit);
	function start(){
		alert(1);
	}
	return {
		start:start
	};
})