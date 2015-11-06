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
			//model
			
			// personModel.create({
			// 	name:'5647456',
			// 	age:665,
			// 	title:"CFO"
			// });

			//entity
			var personEntity = new personModel(obj);
			personEntity.save();
			console.log(personEntity.name);
			console.log('data is saved');
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
