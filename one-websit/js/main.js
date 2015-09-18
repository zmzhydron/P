$("#button_a").click(function(){
	console.log(this.id);
	$.ajax({
		url:"http://127.0.0.1:8888?haha=zmz",
		success:function(o){
			console.log(o);
			// alert("my first nodejs response");
		}
	})
})