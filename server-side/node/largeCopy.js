var fs = require('fs');

var origin = 'C:/Users/zhangmingzhi/desktop/111.mp4',
	target = 'C:/Users/zhangmingzhi/desktop/gittest/123.mp4',
	originStream = fs.createReadStream(origin),
	targetStream = fs.createWriteStream(target);
// originStream.on('data',function(chunk){
// 	if(targetStream.write(chunk) === false){
// 		originStream.pause();
// 		console.log('pause');
// 	}
// });
// targetStream.on('drain',function(){
// 	originStream.resume();
// 	console.log("resume");
// })
// originStream.on('end',function(){
// 	console.log('finished');
// })
originStream.pipe(targetStream);