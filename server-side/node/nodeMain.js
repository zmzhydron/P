var count = 0;
+function(){
	var http = require('http'),
	 	urlModel = require('url'),
		pathModel = require('path'),
		fsModel = require('fs');
	/*
		app.js

	*/ 
	var myapp = require('./app');
	myapp.start();
	var server = http.createServer(function (req, res) { 
		/*
			A01
			一个最基本的实现了路由功能和静态文件读取功能的node服务器;
		*/
		// console.log(req);
		var POSTDATA = '';
		req.on('data',function(chunk){
			
			POSTDATA = chunk.toString('utf-8');
		});
		req.on('end',function(){
			console.log("&&&&&&&&&&&&&&&&&&&&&&&")

		});
		// res.writeHead(200,{'Content-Type':'text/plain'});
		res.write(POSTDATA);
		var urlpath = urlModel.parse(req.url).pathname;
		var querys = urlModel.parse(req.url).query;
		if(querys){
			console.log("DATA REQUEST!!")
			if(querys.length){
				var ary = [];
				var reqStrings = [];
				querys = querys.split(';');
				for(var s = 0,len = querys.length;s<len;s++){
					var asd = querys[s].split('=');
					var o = {};
					o[asd[0]] = asd[1];
					ary.push(o);
					reqStrings.push('名称为：'+asd[0]+" 值为："+asd[1]+" </br>");
				}
				setTimeout(function(){
					res.writeHead(200,{'Content-Type':'text/plain'});
					// res.write(reqStrings.join(''));
					res.end();
				},3000);
				return;
				// console.log(ary[0].haha,ary[1].me,ary[2].age);
			}
		}else{
			console.log("PAGE REQUEST!!")
		}
		//console.log(req.url);
		console.log(urlpath,"urlpath");
		if(urlpath === "/" || !urlpath){
			console.log("there is not path you required!");
			return;
		};
		urlpath = urlpath.substring(1,urlpath.length);
		var truePath = "../../"+urlpath;
		if(urlpath.indexOf("one-websit/asd.htm") != -1){
			// console.log("this url path is :"+urlpath);
		};

		fsModel.exists(truePath,function(exists){
			if(!exists){ //no file
				res.writeHead(404, {'Content-Type': 'text/plain'});
				res.write("request url not found!!");
				res.end();
			}else{ //has file
				fsModel.readFile(truePath,'binary',function(error,file){ //read local html file
					if(error){ //read file error handler
						res.writeHead(500, {'Content-Type': 'text/plain'});
						res.write(error);
						res.end();
					}else{
						console.log("success~~~");
						res.writeHead(200,{'Content-Type':'text/html'});
						res.write(file,'binary');
						res.end();
					}
				});
			}
		});
		/*
			A01结束;
		*/
		/*
			A02 向硬盘写入一个txt文件,最终是由前台来把内容传递到node server 来添加
		*/ 
		fsModel.appendFile('needtobecreate-b.txt','this is my second!!! node server input to local disk string ,to be continued!!',['utf-8'],function(error){
			if(error){
				// console.log('create file error,error msg: @@@@@@@@@@@@@@@@@@@@@ '+error);
			}else{
				// console.log("create successed !!");
			}
			
		});
		count++;
		console.log("********************************************************")
		console.log(count);
		console.log("********************************************************")
	});
	server.listen("8888","127.0.0.1");

	// server.on("request",function(res,rep){
	// 	var str = "";
	// 	console.log("@@@@@@@@@@");
	// 	for(var s in res){
	// 		str = str + res[s] + "\n";
	// 	};
	// 	// rep.writeHead(200,{'Content-Type':'text/plain'});
	// 	// // rep.write(str);
		
	// 	// setTimeout(function(){
	// 	// 	rep.end();
	// 	// },10)
	// });
	console.log('Server running at http://127.0.0.1:8888/'); 
}();