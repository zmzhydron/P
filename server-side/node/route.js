+function(){
	var route = require('express').Router();  //路由子模块；
	route.get('/jaja',function(req,res){
		res.send("i'm jaja form star war XII");
	});
	module.exports = route;
}()