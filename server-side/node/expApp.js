+function(){
	var exp = require('express');
	var app = exp();
	var bodyParder = require('body-parser');
	//解析POST传递过来的JSON/XML数据。
	//两种写法;
	// app.use(bodyParder.urlencoded({extended:true}));
	app.use(require('body-parser').urlencoded({extended:true}));
	/*
		调用静态文件，more detail see http://www.expressjs.com.cn/starter/static-files.html
	*/

	app.use('/js',exp.static('../resource/javascript'));
	app.use('/image',exp.static('../resource/image'));
	app.use('/csses',exp.static('../resource/css'));
	app.use(exp.static('../resource/pages'));

	//localtest
	/*
		当使用了test作为../../../localtest 路径名称后，可以在所有通过express静态服务器加载的静态代码中实现这个路径（../../localtest);
	*/
	app.use('/test',exp.static('../../localtest'));
	app.use('/image',exp.static('../../localtest/image'));

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

	var server = app.listen(8888,function(req,res){
		// console.log(req.url);
		// var address = server.address().address;
		// var port = server.address().port;
		// console.log(address+" address ",port+"  port");
	});
	// var server = app.listen(8888);
}();