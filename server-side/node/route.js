	var route = require('express').Router();  //路由子模块；
	 	copy = require('file'),
	 	osTest = require('osTest');
	/*
		mongoDB
	*/
	// var db = require('./db');
	/*
		TCP
	*/
	var tpcClient = require('./TCP-client');

	var middle = {
		a:function(req,res,next){
			console.log("this is middleware AA");
			next();
		},
		b:function(req,res,next){
			console.log("this is middleware BB");
			next();
		},
		post:function(req,res,next){
			console.log("this is middleware CC");
			var name = req.body.name;
			db.test(req,res,next,'this is db\'s middleware');
			db.save(req.body);
			console.log('send back ajax request ---------------------------------');
			res.send({
				retMSG:"success",
				msg:JSON.stringify(req.body)
			});
		},
		get:function(req,res,next){
			var data = db.find(req,res,next);
		},
		copy:function(req,res,next){
			var params = req.body;
			copy.setParams(params,req,res,next);
			copy.opfn();
		},
		SystemInfo:function(req,res,next){
			osTest.init(req,res,next);
		},
		tcpClient:function(req,res,next){
			var params = req.body;
			console.log(params.userName+" ************* "+params.txt)
			tpcClient.write(params.userName,params.txt,req,res,next);
		},
		TCPfinalRoute:function(req,res,next){
			console.log(req.passMessage.data+"  ********************");
			res.send({
				data:req.passMessage.data
			})
		}
	}

	/*
		中间件;
	*/
	//全部请求都会通过这个中间件,注意USE方法传入的参数只有回调函数，没有监听的路径，这说明是全局中间件
	route.use(function(req,res,next){
		console.log(" all tranffic must to throut me");
		next();
	});


	route.use('/jaja',[middle.a,middle.b],function(req,res){
		res.send(" IAM JAJA FORM STAR WAR XIIII");
	});

	//resetful post

	route.post('/copy',middle.copy);

	route.post('/poster',middle.post);

	route.get('/getPerson',middle.get);

	route.get('/SystemInfo',middle.SystemInfo);

	route.post('/TCPClient',middle.tcpClient);


	// route.all('/TCPClient',middle.TCPfinalRoute);

	// ‘/fuck’访问 127.0.0.1:8888/fuck
	route.get('/fuck',function(req,res){
		res.send("this is fuck page")
	})
	// get '1.txt'; 使用next方法将控制权交给下一个控制器来处理，问题是好像send只能在第一次使用的时候有效，之后的都无效了；
	route.get('/1.txt',function(req,res,next){
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
	route.get('/fnArray',[N1,N2,N3]);



	module.exports = route;