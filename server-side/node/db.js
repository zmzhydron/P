	/*
		mongoDB
	*/
	var mongo = require('mongoose');
	var Schema = mongo.Schema;
	mongo.connect("mongodb://127.0.0.1:27017/zmz");
	//得到连接成功后的对象；
	var db = mongo.connection;
	db.once('open',function(){
		console.log('db opened');
	});

	var personSchema = new Schema({
		name:String,
		age:Number,
		address:String,
		profession:String,
		phone:Number,
		income:Number,
		relationstatus:String
	});
	var personModel = mongo.model('personModel',personSchema,'person');

	var m = {
		save:function(obj){
			/*
				model操作表，entity操作表中的一条document
			*/
			//model
			
			personModel.create(obj);
			//entity
			// var personEntity = new personModel(obj);
			// personEntity.save();
			console.log('data is saved');
		},
		createSchema:function(){
			console.log("@@@@@@@@@");
		},
		update:function(){

		},
		remove:function(){

		},
		find:function(req,res,next){
			//这是一个异步查询
			personModel.find(function(err,data){
				if(err){
					console.log('DB ERROR');
				}
				console.log(data);
				console.log('*************');
				res.send(JSON.stringify(data));
			})
		},
		test:function(req,res,next,val){
			res.appendInfo = val;
			console.log(val);
			next();
		}
	}
	module.exports = m;
