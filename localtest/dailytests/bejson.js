'use strict'
const fs = require('fs');

fs.writeFile("C:/12.txt",'',(error) =>{
	if(error){
		console.log('writefile error');
		return false;
	}
	console.log('writefile success');
})

var obj = {
	name: "zhangmingzhi",
	age: 27,
	sex: 'male',
	skill: {
		js: "port",
		html: "soso",
		react: "still leaing",
		node : "begginng"
	}
}
fs.appendFile("C:/12.txt",JSON.stringify(obj),(error) =>{
	if(error){
		console.log('appendfile error');
		return false;
	}
	console.log('appendfile success');
});

fs.readFile("C:/12.txt",(error,data) =>{
	if(error){
		console.log('readyFile error');
		return false;
	}
	var data = data.toString();
	var dataObj = JSON.parse(data);
	var {name,age,sex,skill:{js,html,react,node}} = dataObj;
	console.log(name,js,node,react);
})