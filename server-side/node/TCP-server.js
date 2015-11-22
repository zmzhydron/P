/*
	11-21 first tcp test socket functions
*/
var net = require('net');

var option = {
	host:'127.0.0.1',
	port:8899
}

var server = net.createServer(function(socket){
	var str = '';
	socket.on('data',function(chunk){
		str += chunk;
		console.log(chunk.toString());
		socket.write("THIS IS RESPONSE: "+str);
		console.log(socket.address())
	});
	socket.on('drain',function(){
		consoel.log('ondrain');
	})
	socket.on('end',function(){
		console.log('server is end');
	})
});
server.listen(8899,function(){
	console.log('server started')
});