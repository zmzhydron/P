var fs = require('fs');
var counter = 0;
function photoAlley(req,res,next){
	console.log(req);
	counter++;
	res.send("photoAlley!!!"+counter+" counted");
}

module.exports = photoAlley;