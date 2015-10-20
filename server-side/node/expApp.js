+function(){
	var exp = require('express');
	var app = exp();
	var router = exp.Router();
	function resp(req,res){
		res.send('hellow asd asd as d');
	}

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



	// ‘/’根目录
	app.get('/',resp); 
	// ‘/fuck’访问 127.0.0.1:8888/fuck
	app.get('/fuck',function(req,res){
		res.send("this is fuck page")
	})
	// get '1.txt'; 使用next方法将控制权交给下一个控制器来处理，问题是好像send只能在第一次使用的时候有效，之后的都无效了；
	app.get('/1.txt',function(req,res,next){
		// res.send('txt');
		next();
	},function(req,res,next){
		// res.send('im form next you~~');
		next();
	},function(req,res){	
		res.send('fuck you man~~');
	});
	//next方法可以采用一个数组的方法的形式来调用；
	function N1(req,res,next){
		console.log('this is N1');
		next();
	}
	function N2(req,res,next){
		next();
	}
	function N3(req,res,next){
		console.log('this is N3')
		res.send('i am a function array\'s result');
	}
	app.get('/fnArray',[N1,N2,N3]);

	var server = app.listen(8888,function(){
		var address = server.address().address;
		var port = server.address().port;
		console.log(address+" address ",port+"  port");
	});
}();