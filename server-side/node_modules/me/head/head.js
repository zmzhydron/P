var dinnerCount = 0;
exports.head = {
	eat:function(){
		dinnerCount++;
		console.log("now i'am has already eat dinner at@ "+dinnerCount);
		return "now i'm eat a meal , must eat chechec";
	}
}