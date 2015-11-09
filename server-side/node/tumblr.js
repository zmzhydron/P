var http = require('http'); //将NODEJS作为一个客户端来请求
var cheerio = require('cheerio'); //Jquery 式的解析下载下来的dom
var request = require('request');
var fs = require('fs'),
	path = require('path');

//option 为请求的对象，一般通过http.request来请求，可以详细的添加参数，就和$.ajax 和 $.get 区别一样
var option = {
	host:'www.chiphell.com',
	path:'/thread-1395899-1-1.html',
	method:'GET'
}
// 一般通过GET 方式来请求
var req = http.request(option,function(res){
	var str = '';
	res.on('data',function(chunk){
		str += chunk; //得到请求的数据
	})
	res.on('end',function(){
		console.log('********************')
		getData(str); //当完结的时候把请求的raw data 放到解析方法中来得到自己希望的数据
	})
	res.on('error',function(data){
		console.log(data);

	})
});
req.end();
function getData(data){
	//通过cherrio 来加载其中的raw data 来转换成我们熟知的“dom”对象
	var $ = cheerio.load(data);
	var cls = 'zoom';
	var imgs = [];
	$('.zoom').each(function(i){
		//一般网站下的图片路径都是相对的，所以要加载其根目录的东西
		var src = 'http://www.chiphell.com/'+$(this).attr('file');
		
		imgs.push(src);
	});
	downLoadData(imgs);
}

function downLoadData(list){
	//获取图片的名称;

	var s = 0;
	var core = function(){
		if(list[s]){
			var name = path.basename(list[s]);
			request(list[s]).pipe(fs.createWriteStream('C:/Users/zhangmingzhi/Desktop/test/'+name)).on('close',function(){
				console.log(name,"@@@@@@@@@@@@@@@@@");
				s++;
				core();
			})
		}
	}
	core();
}


