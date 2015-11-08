var http = require('http');

var option = {
	hostname:'www.ifeng.com',
	method:'GET'
}
var req = http.request(option,function(res){
	console.log(res);
	console.log('*************************************')
	res.on('data',function(chunk){
		// console.log(chunk)
	})
});

req.end();

