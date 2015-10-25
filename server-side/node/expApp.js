+function(){
	var exp = require('express');
	var app = exp();


	/*
		中间件;
	*/
	//全部请求都会通过这个中间件,注意USE方法传入的参数只有回调函数，没有监听的路径，这说明是全局中间件

	app.use(function(req,res,next){
		console.log(" all tranffic must to throut me");
		next();
	});

	//监听网站根目录的中间件；
	app.use('/',function(req,res,next){
		console.log('this is middleware');
		next();
	})

	/*
		路由系列
	*/
	//通过Router来通过一个单独的文件来写路由处理；
	app.use(require('./route'));

	var server = app.listen(8888,function(){
		var address = server.address().address;
		var port = server.address().port;
		console.log(address+" address ",port+"  port");
	});
}();