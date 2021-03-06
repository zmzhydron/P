var http = require('http'), //将NODEJS作为一个客户端来请求
	cheerio = require('cheerio'); //Jquery 式的解析下载下来的dom
	request = require('request'),
 	fs = require('fs'),
	path = require('path'),
	fileMaker = require('fileCreater');

var res,req,next;

//option 为请求的对象，一般通过http.request来请求，可以详细的添加参数，就和$.ajax 和 $.get 区别一样 http://goalnertors.tumblr.com/archive/2015/1

var option,folderName,userPath,categoryPath,fullfilepath;

function main(host,path,req,res,next){
	res = res;
	req = req;
	next = next;
	option = {
		host:host,
		path:path,
		method:'GET'
	}
	folderName = option.host.substring(0,option.host.indexOf('.tumblr'));

	userPath = 'C:/11/tumblr/' + folderName;

	categoryPath = userPath +'/'+ option.path.replace(/\//,'-').replace(/\//,'-').replace(/\//,'-');

	fullfilepath = fileMaker(categoryPath);

	res.send('createFolder success!!')
	//超链接，应该要规避这种形式的链接
	// var url =  "//pinterest.com/pin/create/button/?url=http://flensburgpaar.tumblr.com/post/133002322926/november-11-2015&media=http://40.media.tumblr.com/ca8821265ba90dd5e176f62f75293b56/tumblr_nxnnes7kUj1s63s56o1_500.jpg";
	// 一般通过GET 方式来请求
	var reqq = http.request(option,function(res){
		var str = '';
		console.log(res.headers);
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
	reqq.end();

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
		var src = $(this).attr('href');
		// console.log("src is*************: "+src);
		var req = http.get(src,function(res){
			var str = '',
				list = [];
			res.on('data',function(chunk){
				str += chunk; //得到请求的数据
			})
			res.on('end',function(){
				var $ = cheerio.load(str);
				$('img').each(function(){
					var parent = $(this).parent();
					if(parent[0] && parent[0].name === 'a'){
						if(parent.attr('href').indexOf('tumblr') !== -1){
							console.log('src are: ' + $(this).attr('src'));
							list.push($(this).attr('src'));
						}
					}
					// else{
					// 	list.push($(this).attr('src'));
					// }
					
				});
				downLoadData(list);
			})
		});
		req.end();
	});
}
function downLoadData(list){
	//获取图片的名称;
	var s = 0;
	var core = function(){
		if(list[s]){
			var name = path.basename(list[s]);
			// console.log()
			if((name.indexOf('png') !== -1 || name.indexOf('jpg') !== -1) && list[s].indexOf('pinterest') === -1){
				request.get(list[s]).on("response",function(response){
					//判断长度;
					// console.log(response.headers['content-length']+"  response.headers['content-length']");
					if(response.headers['content-type'] === 'image/jpeg'){

						if(parseInt(response.headers['content-length']) > 2000){
							// this.pipe(fs.createWriteStream('C:/Users/zhangmingzhi/Desktop/test/'+name));
							this.pipe(fs.createWriteStream(fullfilepath+"/"+name));
						}
					}
				}).on('close',function(){
					console.log(name,"@@@@@@@@@@@@@@@@@");
				})
			}
			s++;
			core();
		}
	}
	core();
}

module.exports = main;

