var tool = {
	isFunction:function(o){
		return Object.prototype.toString.call(o) === "[object Function]";
	}
}
exports.tool = tool;