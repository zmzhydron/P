	var route = require('express').Router();  //路由子模块；
	
	route.use(function(req,res){
		res.send('im back and jam you monther fucker')
	});
	route.get('/jaja',function(req,res){
		res.send(" IAM JAJA FORM STAR WAR XIIII");
	})

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