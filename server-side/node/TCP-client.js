/*
	11-21 first tcp test socket functions
*/
var net = require('net');

var option = {
	host:'127.0.0.1',
	port:8899
}

var connectionList = {}; 

function createConnection(userName,request,res,next){
	var socket = net.connect(option,function(){
		console.log('USER: '+ userName +' HAS LOGIN');
	});
	socket.setEncoding('utf8')
	socket.user = userName;
	connectionList[userName] = socket;
	
	socket.write('welcome user: '+userName+" join the chatroom!",function(){
	});
	socket.on('data',function(chunk){
		// res.send(chunk);
		console.log(chunk);
	})
	socket.on('end',function(){
		console.log("USER: "+userName+ " HAS LEFT CHATROOM");
	})
}
var client = {
	write:function(userName,str,request,res,next){
		if(!connectionList[userName]){
			client.create(userName,request,res,next);
		}
		var socket = connectionList[userName];
		if(str.toLowerCase() === 'exit'){
			socket.write(str,function(){
				res.send({
					data:"exiting this program"
				});
				socket.end();
			})
		}else{
			var s = "User: "+socket.user+" say: "+ str;
			socket.write(s,function(){
				res.send({
					'data':s
				})
			})
		}
		
	},
	create:function(userName,request,res,next){
		if(!connectionList[userName]){
			createConnection(userName,request,res,next);
		}
	}
}
module.exports = client;