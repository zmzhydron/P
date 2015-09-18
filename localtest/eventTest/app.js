require(['domEvent'],function(domEvent){
	console.log(domEvent);
		var a = document.getElementById('a');
	function aclick(){
		console.log("aaaa");

	}
	function bbb(){
		console.log("bbb");
	}
	function ccc(){
		console.log("ccc");

	}

	domEvent.add(a,'click',aclick);
	domEvent.add(a,'click',bbb);
	domEvent.add(a,'click',ccc);
	a.onclick = function(){
		console.log("fuck you");
		domEvent.remove(a,'click',bbb);
		domEvent.add(a,'click',bbb);
	}
})
console.log(2);