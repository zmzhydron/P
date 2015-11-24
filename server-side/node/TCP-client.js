/*
	11-21 first tcp test socket functions
*/
var net = require('net');

var option = {
	host:'127.0.0.1',
	port:8899
}

var req = net.connect(option,function(){
	console.log('THIS RESPONSE IS AS FLLOWS');
})
req.write('fuck you man zhang ming zhi 1234',function(){
	console.log("request send success");
	
});
req.on('data',function(chunk){
	console.log('length is: '+chunk.length);
	console.log(chunk +"  receive time: "+new Date().getTime());
	// req.end();
})
req.on('end',function(chunk){
	console.log("client is end");
})

module.exports = {
	write:function(str,request,res,next,callback){
		if(str.toLowerCase() === 'exit'){
			req.write(str,function(){
				res.send({
					data:"exiting this program"
				});
				req.end();
			})
		}else{
			req.write(str,function(){
				request.passMessage = {
					'data':'TCP is finish send data: '+str+' bye paul'
				}
				next();
			})
		}
		
	}
}