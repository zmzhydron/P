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
	app.use('/img',exp.static('../resource/image'));
	app.use('/csses',exp.static('../resource/css'));
	app.use(exp.static('../resource/pages'));

	//localtest
	/*
		当使用了test作为../../../localtest 路径名称后，可以在所有通过express静态服务器加载的静态代码中实现这个路径（../../localtest);
	*/
	app.use('/test',exp.static('../../localtest'));
	app.use('/image',exp.static('../../localtest/image'));

	/*
		路由系列
	*/
	//通过Router来通过一个单独的文件来写路由处理；
	app.use(require('./route'));	
	var server = app.listen(8888,function(req,res){
		
	});
	// var server = app.listen(8888);
}();