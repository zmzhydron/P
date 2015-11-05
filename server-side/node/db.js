	/*
		mongoDB
	*/
	// var mongo = require('mongoose');
	// var schema = mongo.Schema;
	// mongo.connect("mongodb://127.0.0.1:27017/zmz");
	// //得到连接成功后的对象；
	// var db = mongo.connection;
	// db.once('open',function(){
	// 	console.log('db opened');
	// });
	// var inserter = new schema({
	// 	name:String,
	// 	age:String,
	// 	title:String
	// });
	// mongo.model('Person',inserter,'persons');
	// var pModel = mongo.model('Person');
	// var mike = new pModel({
	// 	name:'mike',
	// 	age:'unknow',
	// 	title:'porn pruducer'
	// })
	// mike.save(function(){
	// 	console.log('save')
	// });
	var m = {
		save:function(){
			console.log('11');
		},
		createSchema:function(){

		},
		update:function(){

		},
		remove:function(){

		},
		find:function(){

		},
		test:function(req,res,next,val){
			res.appendInfo = val;
			console.log(val);
			next();
		}
	}
	module.exports = m;
