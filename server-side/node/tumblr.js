var http = require('http'); //将NODEJS作为一个客户端来请求
var cheerio = require('cheerio'); //Jquery 式的解析下载下来的dom
var request = require('request');
// request = request.defaults({jar: true});
var fs = require('fs'),
	path = require('path');

//option 为请求的对象，一般通过http.request来请求，可以详细的添加参数，就和$.ajax 和 $.get 区别一样 http://goalnertors.tumblr.com/archive/2015/1
var option = {
	host:'goalnertors.tumblr.com',
	path:'/archive/2015/9',
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
		// getData(str); //当完结的时候把请求的raw data 放到解析方法中来得到自己希望的数据
		tumblr(str);
	})
	res.on('error',function(data){
		console.log(data);

	})
});
req.end();
//应多多张图片的情况；
function getData(data){
	//通过cherrio 来加载其中的raw data 来转换成我们熟知的“dom”对象
	var $ = cheerio.load(data);
	var imgs = [];
	$('.photoset_photo.rapid-noclick-resp').each(function(i){
		//一般网站下的图片路径都是相对的，所以要加载其根目录的东西
		var src = $(this).attr('href');
		console.log(src,"  ********************");
		imgs.push(src);
	});
	downLoadData(imgs);
}
function tumblr(data){
	var $ = cheerio.load(data);
	var one = 0, two = 0;
	/*
		得到archive 中的内容索引;
	*/
	var levelOne = $(".hover");

	
	var LevelTwo = [];
	levelOne.each(function(){
		/*
			根据得到archive 中的url 来分别请求
		*/
		var req = http.get($(this).attr('href'),function(res){
			var str = '',
				list = [];
			res.on('data',function(chunk){
				str += chunk; //得到请求的数据
			})
			res.on('end',function(){
				var $ = cheerio.load(str);
				//如果有iframe == 多个图片
				var iframe = $('iframe');
				if(iframe[0]){
					var src = iframe.attr('src');
					getLevelThree(src);
				}else{
					$('.photo-wrapper').find('img').each(function(){
						list.push($(this).attr('src'));
						// console.log($(this).attr('src'),"  *************")
					});
					downLoadData(list);
				}
			})
		});
		req.end();
	});

	var getLevelThree = function(src){
		var req = http.get(src,function(res){
			var str = '',
				list = [];
			res.on('data',function(chunk){
				str += chunk; //得到请求的数据
			})
			res.on('end',function(){
				//如果有iframe == 多个图片
				getData(str);
			})
		});
		req.end();
	}
	// getLevelTwo();
}
function downLoadData(list){
	//获取图片的名称;
	var s = 0;
	var core = function(){
		if(list[s]){
			var name = path.basename(list[s]);
			request.get(list[s]).pipe(fs.createWriteStream('C:/Users/zhangmingzhi/Desktop/test/'+name)).on('close',function(){
				// console.log(name,"@@@@@@@@@@@@@@@@@");
				s++;
				core();
			})
		}
	}
	core();
}


