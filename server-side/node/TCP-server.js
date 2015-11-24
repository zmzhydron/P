/*
	11-21 first tcp test socket functions
*/
var net = require('net');
var fs = require('fs');
var fp = 'F:/copytest/1.txt',
	readOps = {'encoding':'utf8','flag':'r'},
	writeOps = {'encoding':'utf8','flag':'w+'};


var option = {
	host:'127.0.0.1',
	port:8899
}

var socketList = [];

var server = net.createServer();
server.listen(8899,function(){
	console.log('server started')
});
server.on('connection',function(socket){
	socketList.push(socket);
	var str = '';
	socket.setEncoding('utf8');
	socket.on('data',function(chunk){
		console.log("server ondata: ************ "+chunk)
		for(var s = 0,len = socketList.length;s<len;s++){
			socketList[s].write(chunk);
		}
		str += chunk;
		// readFile(socket);
		// writeFile(socket,chunk,true);
	});
	socket.on('end',function(){
		console.log('server is end');
	});
})
server.on('connection',function(){
	console.log(" ONE USER HAS LOGIN");
})

function readFile(socket,type){
	if(!socket) return;
	if(type === 'stream'){
		fs.createReadStream(fp,readOps).pipe(socket);
	}else{
		fs.readFile(fp,readOps,function(er,da){
			if(er){
				socket.write('read file error');
				return;
			}
			socket.write(da);
		})
	}
}
function writeFile(socket,data,type){

	if(!socket) return;

	if(type){
		var targetStream = fs.createWriteStream(fp,writeOps);
		// socket.on('data',function(chunk){
		// 	if(targetStream.write(chunk) === false){
		// 		socket.pause();
		// 	}
		// })
		// targetStream.on('drain',function(){
		// 	socket.resume();
		// })
		// socket.on('end',function(){
		// 	console.log('transifer data completed *************************')
		// })
		targetStream.write(data);
		socket.write('*****************');
	}else{
		fs.writeFile(fp,data,null,null,function(error){
			if(error){

			}else{
				socket.write('file write finished');
			}
		})
	}
}