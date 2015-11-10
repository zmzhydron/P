var fs = require('fs');

var copyPath = 'C:/Users/zmz/Desktop/111.mp4',
	pastePath = 'C:/Users/zmz/Desktop/Github/copy.mp4';

var origin = fs.createReadStream(copyPath);
var target = fs.createWriteStream(pastePath);

// origin.on('data',function(chunk){
// 	if(target.write(chunk) === false){
// 		target.pause();
// 	}
// }).on('end',function(){
// 	target.end();
// });
origin.pipe(target).on('close',function(){
	console.log('copy finished');
});