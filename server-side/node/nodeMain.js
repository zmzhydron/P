
+function(){
	var http = require('http'),
	 	urlModel = require('url'),
		pathModel = require('path'),
		fsModel = require('fs');
	var server = http.createServer(function (req, res) { 
		
	});
	server.listen("8888","127.0.0.1");
	console.log('Server running at http://127.0.0.1:8888/'); 
}();