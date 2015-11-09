var http = require('http');

var count = 0;



var option = {
	hostname:'www.ifeng.com',
	method:'GET'
}
var req = http.get('http://www.zhangmingzhi.cn',function(res){
	var str = '';
	res.on('data',function(chunk){
		str += chunk;
	})
	res.on('end',function(){
		// console.log(str);
	})
});

count++;
console.log(count,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
req.end();

