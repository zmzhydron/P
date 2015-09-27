function isObject(val){
	return Object.prototype.toString.call(val);
}
function toArray(str){
	return Array.prototype.slice.call(str);
}
console.log(toArray('zhangmingzhi'));