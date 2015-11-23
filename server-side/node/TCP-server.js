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

var server = net.createServer(function(socket){
	var str = '';
	socket.setEncoding('utf8');
	socket.on('data',function(chunk){
		str += chunk;
		console.log('client send : '+chunk);
		console.log(socket.address().port,socket.address().family,socket.address().address);
		// readFile(socket);
		// writeFile(socket,chunk,true);
	});
	socket.on('end',function(){
		console.log('server is end');
	})
});
server.listen(8899,function(){
	console.log('server started')
});

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